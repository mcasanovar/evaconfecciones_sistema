import React, { Fragment, useState } from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";
//-- functions
import TransformNumberToMiles from "../../functions/TransformNumberToMiles";
//-- components
import EditOrder from "../Modals/EditOrder";

const CardDetails = ({ item }) => {
  const [stateOpenDialog, setStateOpenDialog] = useState(false);

  const openDialog = () => setStateOpenDialog(true);
  const closeDialog = () => setStateOpenDialog(false);

  return (
    <Fragment>
      <Card
        style={{ marginTop: "2rem", width: "100%" }}
        border={item.color_proceso}
      >
        <Card.Header>
          <ListGroup horizontal>
            <h4>{item.nombre_cliente}</h4>
            <hr />
            <Badge
              pill
              variant={item.color_proceso}
              className="text-white my-auto"
            >
              {item.estado_pedido}
            </Badge>
          </ListGroup>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <ListGroup horizontal>
              <h6 className="my-auto">Nro. Pedido</h6>
              <hr />
              <h6 className="my-auto font-weight-bold">{item.numero}</h6>
            </ListGroup>
            <ListGroup horizontal>
              <h6 className="my-auto">Fecha Pedido</h6>
              <hr />
              <h6 className="my-auto font-weight-bold">{item.fecha_pedido}</h6>
            </ListGroup>
          </Card.Title>
          <h6 className="my-auto">Comentario</h6>
          <h6
            className="my-auto font-weight-bold"
            style={{ paddingTop: "0.5rem" }}
          >
            {item.comentario}
          </h6>
          <h6 className="my-auto" style={{ paddingTop: "1rem" }}>
            Fecha Entrega
          </h6>
          <h6
            className="my-auto font-weight-bold"
            style={{ paddingTop: "0.5rem" }}
          >
            {item.fecha_entrega}
          </h6>
        </Card.Body>
        <Card.Body>
          <h5 className="d-flex justify-content-end font-weight-bold">
            {TransformNumberToMiles(item.total)}
          </h5>
        </Card.Body>
        <Card.Body>
          <Button onClick={openDialog} block variant="outline-info">
            Detalle
          </Button>
        </Card.Body>
      </Card>
      <EditOrder
        stateOpenDialog={stateOpenDialog}
        closeDialog={closeDialog}
        item={item}
      />
    </Fragment>
  );
};

export default CardDetails;
