import React, { useEffect } from "react";
import CardDetails from "./CardDetails";
import { Container, Row, Col, CardColumns } from "react-bootstrap";

//-- Redux
import { useDispatch, useSelector } from "react-redux";
import { ShowOrdersAction } from "../../redux/Orders/orders";

const CardList = () => {
  const dispatch = useDispatch();
  const orders = useSelector(store => store.orders);

  //-- useEffect
  useEffect(() => {
    dispatch(ShowOrdersAction());
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col xl={1}></Col>
        <Col>
          <CardColumns>
            {orders.array.map(function (e, index) {
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
  );
};

export default CardList;
