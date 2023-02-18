import React from "react";
import classes from "./RequestBtn.module.css";

const RequestBtn = (props) => {
    return (
        <div className={`
        ${["col"]} 
        ${["align-self-center"]} 
        ${["pt-5"]}
        `}
        >
            <button
                type="button"
                className={classes["req__button"]}
                id="request"
                data-toggle="modal"
                data-target="#requestproposal"
            >
                {props.text}
            </button>
        </div>
    );
};

export default RequestBtn;