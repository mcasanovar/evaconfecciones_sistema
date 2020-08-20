import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Container, Row, Col, Alert } from "react-bootstrap";
import moment from "moment";
//-- redux
import { ModifyOrderAction, DeleteOrderAction } from "../../redux/Orders/orders";
import { useDispatch } from "react-redux";
//-- components
import DetailsOrder from "../DetailsOrder/DetailsOrder";
// -- datepicker
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

const EditOrder = ({ stateOpenDialog, closeDialog, item }) => {
  const dispatch = useDispatch();

  //--useEffect
  useEffect(() => {
    setGeneralInput({
      name: item.nombre_cliente,
      rut: item.rut_cliente,
      phone: item.telefono_cliente,
      coment: item.comentario
    });

    var date = moment(item.fecha_entrega, "DD-MMMM-YYYY");
    setDateFinish(new Date(date));
  }, [item])

  //-- useState
  const [ShowAlert, setShowAlert] = useState(false);
  const [ShowErrorDate, setShowErrorDate] = useState(false);
  const [ShowAlertNamePhone, setShowAlertNamePhone] = useState(false);
  const [DateFinish, setDateFinish] = useState(null);
  const [GeneralInputs, setGeneralInput] = useState({
    name: "",
    rut: "",
    phone: "",
    coment: "",
  });

  //- Functions
  const handlerGeneralInputs = (event) => {
    setGeneralInput({
      ...GeneralInputs,
      [event.target.name]: event.target.value,
    });
  };

  const CalculatePercentageAdvance = (item) => {

    const items = item;
    const filterderItems = items.filter(e => e.terminado === true);
    const result = Math.round((filterderItems.length / items.length) * 100, 0);

    return result;
  };

  const PrepareDataToModify = ({ ItemsOrder, Total }) => {
    let obj = {};

    obj._id = item._id;
    obj.nombre_cliente = GeneralInputs.name;
    obj.rut_cliente = GeneralInputs.rut;
    obj.telefono_cliente = GeneralInputs.phone;
    obj.estado_pedido = item.estado_pedido;
    obj.color_proceso = item.color_proceso;
    obj.comentario =
      GeneralInputs.coment === "" ? "Pedido Normal" : GeneralInputs.coment;
    obj.fecha_entrega = moment(DateFinish).format("LL");
    obj.total = Total;
    obj.porcentaje_avance = CalculatePercentageAdvance(ItemsOrder)
    obj.detalle = ItemsOrder;

    return obj;
  };

  const ModifyOrder = ({ ItemsOrder, Total }) => {
    if (
      GeneralInputs.name !== "" &&
      GeneralInputs.phone !== ""
    ) {
      if (ItemsOrder.length <= 0) {
        //verificate for empty table
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2700);
      } else {
        //verificate for empty finish date
        if (DateFinish == null) {
          setShowErrorDate(true);
          setTimeout(() => {
            setShowErrorDate(false);
          }, 2800);
        } else {
          console.log(ItemsOrder);
          const result = PrepareDataToModify({ ItemsOrder, Total });
          dispatch(ModifyOrderAction(result));
        }
      }
    }
    else {
      setShowAlertNamePhone(true);
      setTimeout(() => {
        setShowAlertNamePhone(false);
      }, 2700);
    }
  };

  const DeleteOrder = () => {
    console.log('id', item._id)
    dispatch(DeleteOrderAction(item._id));
  };

  return (
    <Fragment>
      <Modal
        show={stateOpenDialog}
        backdrop="static"
        dialogClassName="custom-dialog"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <FontAwesomeIcon icon="edit" color="orange" className="mr-2" />
            Pedido Nro. {item.numero}
          </Modal.Title>
          <Button onClick={closeDialog} variant="danger">
            Cerrar
          </Button>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {/* General information about order (name, DNI, etc) */}
            <Row>
              <Col>
                <form className="was-validated">
                  <div className="mb-3">
                  <p className='mb-1 text-secondary'>Nombre</p>
                    <input
                      className="form-control is-invalid"
                      name="name"
                      placeholder="Nombre"
                      onChange={handlerGeneralInputs}
                      required
                      value={GeneralInputs.name}
                    ></input>
                  </div>
                  <div className="mb-3">
                  <p className='mb-1 text-secondary'>Telefono</p>
                    <input
                      className="form-control is-invalid"
                      name="phone"
                      placeholder="Telefono"
                      onChange={handlerGeneralInputs}
                      required
                      value={GeneralInputs.phone}
                    ></input>
                  </div>
                </form>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">
                <p className='mb-1 text-secondary'>RUT</p>
                  <input
                    className="form-control"
                    name="rut"
                    placeholder="RUT"
                    onChange={handlerGeneralInputs}
                    value={GeneralInputs.rut}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">
                <p className='mb-1 text-secondary'>Comentario</p>
                  <input
                    className="form-control"
                    name="coment"
                    placeholder="Comentario"
                    onChange={handlerGeneralInputs}
                    value={GeneralInputs.coment}
                  ></input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">
                  <span className="mr-2">Fecha de Entrega</span>
                  <DatePicker
                    selected={DateFinish}
                    locale="es"
                    onChange={(date) => setDateFinish(date)}
                    className="red-border"
                    dateFormat="dd 'de' MMMM 'de' yyyy"
                  />
                  <Alert show={ShowErrorDate} variant="danger" className="mt-2">
                    Debe seleccionar fecha de entrega
                  </Alert>
                </div>
              </Col>
            </Row>
          </Container>
          <h5 className="text-center font-weight-bold">Detalle Pedido</h5>
          {/* Details information about order (details table, buttons, constant, etc) */}
          <DetailsOrder items={item.detalle} isEditMode={true} ModifyOrder={ModifyOrder} DeleteOrder={DeleteOrder} />
          <br />
          <Alert show={ShowAlert} variant="danger">
            Debe agregar productos a la tabla
          </Alert>
          <Alert show={ShowAlertNamePhone} variant="danger" className="mt-2">
            Nombre y telefono de cliente son obligatorios
          </Alert>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default EditOrder;
