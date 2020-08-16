import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailsTable = ({ headers, items, SpliceItemOrder, isEditMode }) => {
  return (
    <Fragment>
      <Table striped bordered hover size="sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            {headers.map(function (e, index) {
              return <th key={index}>{e}</th>;
            })}
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {items.map(function (e, index) {
            return (
              <tr key={index}>
                {isEditMode ? (
                  <td>
                    <input
                      checked={e.terminado}
                      type="checkbox"
                      style={{
                        width: "2rem",
                        height: "1.2rem",
                        marginTop: "0.5rem",
                        cursor: "pointer",
                      }}
                    ></input>
                  </td>
                ) : (
                  <td></td>
                )}
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">{e.establecimiento}</td>
                <td className="align-middle">{e.prenda}</td>
                <td className="align-middle">{e.talla}</td>
                <td className="align-middle">{e.precioString}</td>
                <td className="align-middle">{e.cintura}</td>
                <td className="align-middle">{e.cadera}</td>
                <td className="align-middle">{e.largo}</td>
                <td className="align-middle">{e.manga}</td>
                <td className="align-middle">{e.basta}</td>
                <td className="d-flex justify-content-center">
                  <Button
                    onClick={() => SpliceItemOrder(e)}
                    variant="danger"
                    style={{ minWidth: "20px" }}
                  >
                    <FontAwesomeIcon icon="trash" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default DetailsTable;
