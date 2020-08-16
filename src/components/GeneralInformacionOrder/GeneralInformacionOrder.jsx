import React, { Fragment } from "react";
import { Row, Form, Col } from "react-bootstrap";

const GeneralInformacionOrder = ({ name, rut, phone, readonly }) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Control
                size="md"
                readOnly={readonly}
                type="text"
                placeholder="Nombre"
                value={name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                size="md"
                readOnly={readonly}
                type="text"
                placeholder="RUT"
                value={rut}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                size="md"
                readOnly={readonly}
                type="text"
                placeholder="Telefono"
                value={phone}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default GeneralInformacionOrder;
