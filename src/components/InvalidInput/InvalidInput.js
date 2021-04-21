import React from "react";
import classes from "./InvalidInput.module.css";
import Backdrop from "../Backdrop/Backdrop";

const InvalidInput = (props) => {
  return (
    <Backdrop hideBackdrop={props.hideModal}>
      <div className={classes.container}>
        <div className={classes["invalid-input"]}>
          <h3 className={classes["invalid-message"]}>
            This is an invalid input
          </h3>

          {props.children}

          <button onClick={props.hideModal}>Okay</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default InvalidInput;
