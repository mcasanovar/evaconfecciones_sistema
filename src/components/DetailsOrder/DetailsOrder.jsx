import React, { Fragment, useState, useEffect } from "react";
import { Row, Form, Col, ListGroup, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
//-- components
import DetailsTable from "../Tables/DetailsTable";
//-- functions
import TransformNumberToMiles from "../../functions/TransformNumberToMiles";
//-- constant
import Headers_details_order from "../../constant/Headers/headers_details_order";
import Establecimientos from "../../constant/Establecimientos";

const DetailsOrder = ({ items, isEditMode, InsertOrder, ModifyOrder, DeleteOrder }) => {
  const headers_details_order = Headers_details_order;
  const establecimientos = Establecimientos;

  //-- useEffect
  useEffect(() => {
    CalculateTotalOrder();
  });

  //-- useState
  const [ItemsOrder, setItemsOrder] = useState(items);
  const [isOkDelete, setisOkDelete] = useState(false)
  const [Establecimiento, setEstablecimiento] = useState({
    id: -1,
    nombre: "",
  });
  const [Prenda, setPrenda] = useState({
    id: -1,
    nombre: "",
  });
  const [Talla, setTalla] = useState({
    id: -1,
    nombre: "",
    precio: 0,
  });
  const [meditions, setmeditions] = useState({
    cintura: "",
    cadera: "",
    largo: "",
    manga: "",
    basta: "",
  });
  const [Precio, setPrecio] = useState({
    precioNumber: 0,
    precioString: "",
  });
  const [Total, setTotal] = useState(0);
  const [validated, setValidated] = useState(false);

  //--Functions
  const CleanMeditionsInputs = () => {
    setmeditions({
      cintura: "",
      cadera: "",
      largo: "",
      manga: "",
      basta: "",
    });
  };

  const ChangeStateItem = (id) => {
    const result = ItemsOrder.map(function (e) {
      if (e.id === id) {
        e.terminado = !e.terminado;
      }

      return e;
    })

    setItemsOrder(result);

    console.log(ItemsOrder);
  };

  const CalculateTotalOrder = () => {
    const sum = ItemsOrder.reduce(
      (sum, currentValue) => sum + currentValue.precioNumber,
      0
    );
    setTotal(sum);
  };

  const handlerValidateItem = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      PushDetailsOrder();
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handlerInputEstablecimiento = (event) => {
    setEstablecimiento({
      id: event.target.value,
      nombre:
        event.target.value > -1
          ? establecimientos[event.target.value].nombreEstablecimiento
          : -1,
    });
  };

  const handlerInputPrenda = (event) => {
    setPrenda({
      id: event.target.value,
      nombre:
        establecimientos[Establecimiento.id].prendas[event.target.value]
          .nombrePrenda,
    });
  };

  const handlerInputTalla = (event) => {
    setTalla({
      id: event.target.value,
      nombre:
        establecimientos[Establecimiento.id].prendas[Prenda.id].talla[
          event.target.value
        ].nombreTalla,
      precio:
        establecimientos[Establecimiento.id].prendas[Prenda.id].talla[
          event.target.value
        ].precio,
    });

    setPrecio({
      precioNumber:
        establecimientos[Establecimiento.id].prendas[Prenda.id].talla[
          event.target.value
        ].precio,
      precioString: TransformNumberToMiles(
        establecimientos[Establecimiento.id].prendas[Prenda.id].talla[
          event.target.value
        ].precio
      ),
    });
  };

  const handlerInputPrecio = () => {
    if (Talla.precio > 0) {
      setPrecio({
        precioNumber: Talla.precio,
        precioString: `$${Talla.precio}`,
      });
    }
  };

  const handlerInputMeditions = (event) => {
    setmeditions({
      ...meditions,
      [event.target.name]: event.target.value,
    });
  };

  const SpliceItemOrder = (obj) => {
    const result = ItemsOrder.filter((e) => e !== obj);
    setItemsOrder(result);
  };

  const handlerDeleteInput = (event) => {
    event.target.value === 'eliminar pedido' ? setisOkDelete(true) : setisOkDelete(false);
  }

  const PushDetailsOrder = () => {
    let obj = {};

    obj.id = uuidv4();
    obj.terminado = false;
    obj.establecimiento = Establecimiento.nombre;
    obj.prenda = Prenda.nombre;
    obj.talla = Talla.nombre;
    obj.precioNumber = Precio.precioNumber;
    obj.precioString = Precio.precioString;
    obj.cintura = meditions.cintura;
    obj.cadera = meditions.cadera;
    obj.largo = meditions.largo;
    obj.manga = meditions.manga;
    obj.basta = meditions.basta;

    setItemsOrder([...ItemsOrder, obj]);

    CleanMeditionsInputs();
  };

  return (
    <Fragment>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handlerValidateItem}
                >
                  <Row>
                    <Col>
                      <Form.Label>Establecimiento</Form.Label>
                      <Form.Control
                        as="select"
                        name="establecimiento"
                        required
                        onClick={handlerInputEstablecimiento}
                      >
                        <option value={-1}></option>
                        {establecimientos.map(function (e, index) {
                          return (
                            <option key={index} value={index}>
                              {e.nombreEstablecimiento}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Label>Prenda</Form.Label>
                      <Form.Control
                        as="select"
                        name="prenda"
                        required
                        onClick={handlerInputPrenda}
                      >
                        {Establecimiento.id > -1 &&
                          establecimientos[Establecimiento.id].prendas.map(
                            function (e, index) {
                              return (
                                <option key={index} value={index}>
                                  {e.nombrePrenda}
                                </option>
                              );
                            }
                          )}
                      </Form.Control>
                    </Col>
                    <Col xs={2}>
                      <Form.Label>Talla</Form.Label>
                      <Form.Control
                        as="select"
                        name="talla"
                        required
                        onClick={handlerInputTalla}
                      >
                        {Prenda.id > -1 &&
                          establecimientos[Establecimiento.id].prendas[
                            Prenda.id
                          ].talla.map(function (e, index) {
                            return (
                              <option key={index} value={index}>
                                {e.nombreTalla}
                              </option>
                            );
                          })}
                      </Form.Control>
                    </Col>
                    <Col xs={2}>
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="text"
                        name="precio"
                        required
                        onChange={handlerInputPrecio}
                        value={Precio.precioString}
                      >
                        {/* {Precio.precioString} */}
                      </Form.Control>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={1}>
                      <Form.Label>Cintura</Form.Label>
                      <Form.Control
                        type="number"
                        name="cintura"
                        value={meditions.cintura}
                        onChange={handlerInputMeditions}
                      ></Form.Control>
                    </Col>
                    <Col xs={1}>
                      <Form.Label>Cadera</Form.Label>
                      <Form.Control
                        type="number"
                        name="cadera"
                        value={meditions.cadera}
                        onChange={handlerInputMeditions}
                      ></Form.Control>
                    </Col>
                    <Col xs={1}>
                      <Form.Label>Largo</Form.Label>
                      <Form.Control
                        type="number"
                        name="largo"
                        value={meditions.largo}
                        onChange={handlerInputMeditions}
                      ></Form.Control>
                    </Col>
                    <Col xs={1}>
                      <Form.Label>Manga</Form.Label>
                      <Form.Control
                        type="number"
                        name="manga"
                        value={meditions.manga}
                        onChange={handlerInputMeditions}
                      ></Form.Control>
                    </Col>
                    <Col xs={1}>
                      <Form.Label>Basta</Form.Label>
                      <Form.Control
                        type="number"
                        name="basta"
                        value={meditions.basta}
                        onChange={handlerInputMeditions}
                      ></Form.Control>
                    </Col>
                    <hr />
                    <Col xs={1}>
                      <br />
                      <Button
                        variant="info"
                        block
                        type="submit"
                        style={{ marginTop: "8px" }}
                      >
                        <FontAwesomeIcon icon="plus" />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </ListGroup.Item>
              <ListGroup.Item>
                <DetailsTable
                  headers={headers_details_order}
                  items={ItemsOrder}
                  SpliceItemOrder={SpliceItemOrder}
                  ChangeStateItem={ChangeStateItem}
                  isEditMode={isEditMode}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col className="d-flex flex-row-reverse">
                    <h4 className="font-weight-bold">
                      {TransformNumberToMiles(Total)}
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />
      <Row >
        <Col sm={5}>
          <div className='d-flex'>
            <Form.Control onChange={handlerDeleteInput} name="confirmationText" placeholder='Escribe "eliminar pedido"'/>
            <Button onClick={() => DeleteOrder()} className='ml-2' variant={isOkDelete ? 'danger': 'secondary'} disabled={!isOkDelete}>Eliminar</Button>
          </div>
          <p className='body text-secondary'>Si eliminas este pedido, no hay vuelta atras. Piensalo bien !</p>
        </Col>
        <Col sm={{ span: 3, offset: 4 }} className='align-right'>
          <div className='d-flex justify-content-end'>
            {
              !isEditMode ? (
                <Button className='justify-content-end' onClick={() => InsertOrder({ ItemsOrder, Total })} variant="success">
                  <FontAwesomeIcon className="mr-3" icon="sign-in-alt" />
            Ingresar Pedido
                </Button>
              ) : (
                  <Button className='text-white font-weight-bold' onClick={() => ModifyOrder({ ItemsOrder, Total })} variant="warning">
                    <FontAwesomeIcon className="mr-3" icon="check" />
                    Confirmar edicion
                  </Button>
                )
            }
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DetailsOrder;
