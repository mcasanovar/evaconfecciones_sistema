import React, { Fragment, useState, useEffect } from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";

const Bar = ({ TotalPercentage }) => {

  //-- useState
  const [Percentage, setPercentage] = useState(0);

  //-- useEffect
  useEffect(() => {
    setPercentage(TotalPercentage);
  }, [TotalPercentage])

  return (
    <Fragment>
      <Row>
        <Col>
          <p className="text-center font-weight-bold">{Percentage}%</p>
          <ProgressBar animated now={Percentage} variant="success" />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Bar;
