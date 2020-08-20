import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Container, Row, Col, Button, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
//-- componentes
import DetailsOrder from "../DetailsOrder/DetailsOrder";
//-- redux
import { useDispatch, useSelector } from "react-redux";
import { InsertOrderAction } from "../../redux/Orders/orders";
// -- datepicker
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

const NewOrder = ({ stateOpenDialog, closeDialog }) => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.orders.array);

  //- useState
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

  const PrepareDataToInsert = ({ ItemsOrder, Total }) => {
    let today = moment().format("DD-MM-YYYY HH:mm");

    let obj = {};

    obj._id = uuidv4();
    obj.numero = orders.length + 1;
    obj.nombre_cliente = GeneralInputs.name;
    obj.rut_cliente = GeneralInputs.rut;
    obj.telefono_cliente = GeneralInputs.phone;
    obj.estado_pedido = "En Proceso";
    obj.color_proceso = "warning";
    obj.fecha_pedido = today.substr(0, 10);
    obj.comentario =
      GeneralInputs.coment === "" ? "Pedido Normal" : GeneralInputs.coment;
    obj.fecha_entrega = moment(DateFinish).format("DD-MMMM-YYYY");
    obj.total = Total;
    obj.porcentaje_avance = 0;
    obj.detalle = ItemsOrder;

    return obj;
  };

  const InsertOrder = ({ ItemsOrder, Total }) => {
    if (
      GeneralInputs.name !== "" &&
      GeneralInputs.phone !== ""
    ) {
      if (ItemsOrder.length <= 0) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2700);
      } else {
        if (DateFinish == null) {
          setShowErrorDate(true);
          setTimeout(() => {
            setShowErrorDate(false);
          }, 2800);
        } else {
          const result = PrepareDataToInsert({ ItemsOrder, Total });
          dispatch(InsertOrderAction(result));
        }
      }
    }
    else{
      setShowAlertNamePhone(true);
        setTimeout(() => {
          setShowAlertNamePhone(false);
        }, 2700);
    }
  };

  return (
    <div>
      <Modal
        show={stateOpenDialog}
        backdrop="static"
        dialogClassName="custom-dialog"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <FontAwesomeIcon icon="file" color="#17a2b8" className="mr-2" />
            Nuevo Pedido
          </Modal.Title>
          <Button onClick={closeDialog} variant="danger">
            Cerrar
          </Button>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container fluid>
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
                    dateFormat="dd '-' MMMM '-' yyyy"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <h5 className="text-center font-weight-bold">Detalle Pedido</h5>
          {/* Details information about order (details table, buttons, constant, etc) */}
          <DetailsOrder
            items={[]}
            isEditMode={false}
            InsertOrder={InsertOrder}
          />
          {/* ------------- */}
          <br />
          <Alert show={ShowAlert} variant="danger">
            Debe agregar productos a la tabla
          </Alert>
          <Alert show={ShowErrorDate} variant="danger" className="mt-2">
            Debe seleccionar fecha de entrega
          </Alert>
          <Alert show={ShowAlertNamePhone} variant="danger" className="mt-2">
            Nombre y telefono de cliente son obligatorios
          </Alert>
        </Modal.Body>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NewOrder;
