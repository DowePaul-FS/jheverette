import React, { useState } from "react";
import classes from "./Message.module.css";
import Proposal from "./Proposal";
import RequestBtn from "./UI/RequestBtn";

const Message = (props) => {
  const [requestIsShown, setRequestIsShown] = useState(false);

  const showRequestHandler = () => {
    setRequestIsShown(true);
  };

  const hideRequestHandler = () => {
    setRequestIsShown(false);
  };


  return (
    <div className={["container-fluid"]}>
      <div
        className={`
            ${["row"]} 
            ${["row-cols-1"]} 
            ${["row-cols-sm-1"]} 
            ${["row-cols-md-2"]} 
            ${["row-cols-lg-3"]}
            `}
      >
        <div
          className={`
                ${["col"]} 
                ${["align-self-center"]}
                `}
        >
          <h2 className={classes.message}>{props.tag}</h2>
        </div>
        <div className={["col offset-N1"]}>
          <p>{props.message}</p>
        </div>
        <span className={classes.btn2}>
          <div
            className={`
                ${["col"]} 
                ${["align-self-center"]}
                `}
          >
            <RequestBtn text="request proposal" id="2" onShowRequest={showRequestHandler} />
          {requestIsShown && <Proposal onClose={hideRequestHandler} />}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Message;
