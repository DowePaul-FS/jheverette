import React from 'react';
import classes from "./ServiceRight.module.css";
import { Link } from "react-router-dom";
import code from "../images/dev_code_308_300.jpg";
import phone from "../images/dev_phone_308_560.jpg";
import prog from "../images/dev_prog_308_300_.jpg"

const ServiceRight = (props) => {
    return (
        <div className={`
        ${["row"]} 
        ${["row-cols-2"]}
        `}
        >
            <section className={`
            ${["col"]} 
            ${classes["photo__grid"]}
            `}
            >
                <h2 hidden>dev</h2>
                <figure className={classes.fig1}>
                    <a href="development">
                        <Link to="/WebDevelopment">
                            <img
                                width="308"
                                height="300"
                                src={code}
                                alt="Development Code"
                            />
                        </Link>
                    </a>
                </figure>
                <figure className={classes.fig2}>
                    <a href="development">
                        <Link to="/WebDevelopment">
                            <img
                                width="308"
                                height="560"
                                src={phone}
                                alt="Mobile Development"
                            />
                        </Link>
                    </a>
                </figure>
                <figure className={classes.fig3}>
                    <a href="development">
                        <Link to="/WebDevelopment">
                            <img
                                width="308"
                                height="300"
                                src={prog}
                                alt="Development Programming"
                            />
                        </Link>
                    </a>
                </figure>
            </section>
            <section class="col">
                <div>
                    <h3 className={classes.svc}>
                        {props.service}
                    </h3>
                    <h2 className={classes.svc__title}>
                        {props.serviceTitle}
                    </h2>
                </div>
                <div>
                    <p className={`
                    ${classes["svc__para"]} 
                    ${classes["desi__pos"]}
                    `}
                    >
                        {props.serviceCopy}
                    </p>
                </div>
                <div className={classes["svc__link"]}>
                    <a href="development"
                        title="web development in wilmington north carolina">
                        <Link to="/WebDevelopment">
                            learn more
                        </Link></a
                    >
                </div>
            </section>
        </div>
    );
};

export default ServiceRight;