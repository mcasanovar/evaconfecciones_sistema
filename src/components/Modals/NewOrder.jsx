import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
//-- componentes
import GeneralInformacionOrder from "../GeneralInformacionOrder/GeneralInformacionOrder";
import DetailsOrder from "../DetailsOrder/DetailsOrder";
//-- constant

const NewOrder = ({ stateOpenDialog, closeDialog }) => {
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
            <FontAwesomeIcon icon="file" color="#17a2b8" className="mr-2" />
            Nuevo Pedido
          </Modal.Title>
          <Button onClick={closeDialog} variant="danger">
            Cerrar
          </Button>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {/* General information about order (name, DNI, etc) */}
            <GeneralInformacionOrder />
            {/* -------- */}
          </Container>
        </Modal.Body>
        <h5 className="text-center font-weight-bold">Detalle Pedido</h5>
        <Modal.Body>
          {/* Details information about order (details table, buttons, constant, etc) */}
          <DetailsOrder items={[]} isEditMode={false}/>
          {/* ------------- */}
          <br/>
          <Row>
            <Col className='d-flex flex-row-reverse'>
              <Button variant="success">
                <FontAwesomeIcon className='mr-3' icon="sign-in-alt"/>
                Ingresar Pedido
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default NewOrder;
