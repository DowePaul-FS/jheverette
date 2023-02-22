import React from "react";
import classes from "./Start.module.css";
import RequestBtn from "./UI/RequestBtn";

const Start = (props) => {
  return (
    <section>
      <div className={classes["start__tit"]}>
        <h3 className={classes["start__txt"]}>{props.text}</h3>
      </div>
      <div className={classes["start__btn"]}>
        <RequestBtn text="request proposal" id="3" />
      </div>
    </section>
  );
};

export default Start;
