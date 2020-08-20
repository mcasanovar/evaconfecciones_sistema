import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Button } from "react-bootstrap";

import NewOrder from "../Modals/NewOrder";

const TopBar = () => {
  const [stateOpenDialog, setStateOpenDialog] = useState(false);

  const openDialog = () => setStateOpenDialog(true);
  const closeDialog = () => setStateOpenDialog(false);

  return (
    <Fragment>
      <Navbar className="custom-bg-primary">
        <Button variant="info" onClick={openDialog}>
          <FontAwesomeIcon icon="plus" className="mr-2" />
          Nuevo Pedido
        </Button>
      </Navbar>
      <div className="neworder">
        <NewOrder stateOpenDialog={stateOpenDialog} closeDialog={closeDialog} />
      </div>
    </Fragment>
  );
};

export default TopBar;
