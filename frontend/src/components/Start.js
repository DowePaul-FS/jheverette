import React, { useState } from "react";
import classes from "./Start.module.css";
import Proposal from "./Proposal";
import RequestBtn from "./UI/RequestBtn";

const Start = (props) => {
  const [requestIsShown, setRequestIsShown] = useState(false);

  const showRequestHandler = () => {
    setRequestIsShown(true);
  };

  const hideRequestHandler = () => {
    setRequestIsShown(false);
  };

  return (
    <section>
      <div className={classes["start__tit"]}>
        <h3 className={classes["start__txt"]}>{props.text}</h3>
      </div>
      <div className={classes["start__btn"]}>
      <RequestBtn text="request proposal" id="3" onShowRequest={showRequestHandler} />
          {requestIsShown && <Proposal onClose={hideRequestHandler} />}
      </div>
    </section>
  );
};

export default Start;
