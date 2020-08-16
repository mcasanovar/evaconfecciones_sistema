import React, { Fragment } from "react";
import { ListGroup, Row, Col, ProgressBar } from "react-bootstrap";

const Bar = ({ TotalPercentage }) => {
  return (
    <Fragment>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col>
              <p className="text-center font-weight-bold">{TotalPercentage}%</p>
              <ProgressBar animated now={TotalPercentage} variant="success" />
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
};

export default Bar;
