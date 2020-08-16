import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
//-- components
import GeneralInformacionOrder from "../../components/GeneralInformacionOrder/GeneralInformacionOrder";
import DetailsOrder from "../DetailsOrder/DetailsOrder";
import ProgressBar from "../ProgressBar/ProgressBar";

const EditOrder = ({ stateOpenDialog, closeDialog, item }) => {
  //-- useEffect
  useEffect(() => {
    CalculatePercentageAdvance();
  }, []);

  //useState
  const [TotalPercentage, setTotalPercentage] = useState(0);

  const CalculatePercentageAdvance = () => {
    const items = item.detalle;
    const cant = items.reduce(function (total, currentValue) {
      if (currentValue.terminado) {
        total++;
      }

      return total;
    }, 0);

    const result = Math.round(((cant/items.length)*100), 0);

    setTotalPercentage(result);
  };

  return (
    <Fragment>
      <Modal
        show={stateOpenDialog}
        backdrop="static"
        dialogClassName="custom-dialog"
        aria-labelledby="example-custom-modal-styling-title"
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
            <GeneralInformacionOrder
              name={item.nombre_cliente}
              rut={item.rut_cliente}
              phone={item.telefono_cliente}
              readonly={true}
            />
            {/* -------- */}
          </Container>
        </Modal.Body>
        <h5 className="text-center font-weight-bold">Progreso Pedido</h5>
        <Modal.Body>
          {/* Progress Bar with the progress of the order */}
          <ProgressBar TotalPercentage={TotalPercentage}/>
          {/* -------------- */}
        </Modal.Body>
        <h5 className="text-center font-weight-bold">Detalle Pedido</h5>
        <Modal.Body>
          {/* Details information about order (details table, buttons, constant, etc) */}
          <DetailsOrder items={item.detalle} isEditMode={true} />
          {/* ------------- */}
          <br />
          <Row>
            <Col className="d-flex flex-row-reverse">
              <Button variant="warning" className="text-white font-weight-bold">
                <FontAwesomeIcon className="mr-3" icon="check-double" />
                Confirmar Edicion
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default EditOrder;
