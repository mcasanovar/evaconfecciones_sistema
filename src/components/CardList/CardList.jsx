import React, { Fragment } from "react";
import CardDetails from "./CardDetails";
import { Container, Row, Col, CardColumns } from "react-bootstrap";

//-- constant
import Orders from "../../constant/Orders";

const CardList = () => {
  const orders = Orders;

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col xl={1}></Col>
          <Col>
            <CardColumns>
              {orders.map(function (e, index) {
                return (
                  <div key={index}>
                    <CardDetails item={e} />
                  </div>
                );
              })}
            </CardColumns>
          </Col>
          <Col xl={1}></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CardList;
