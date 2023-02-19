import React from 'react';
import classes from './ServiceLeft.module.css';
import { Link } from "react-router-dom";
import lay from "../images/des_lay_308_300.jpg";
import block from "../images/des_block_308_560.jpg";
import html from "../images/des_html_308_300.jpg";

const ServiceLeft = (props) => {
    return (
        <div className={`
        ${["row"]} 
        ${["row-cols-2"]}
        `}
        >
            <section className={["col"]}>
                <div>
                    <h3 className={classes.svc}>{props.service}</h3>
                    <h2 className={classes.svc__title}>{props.serviceTitle}</h2>
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
                    <a href="design" title="web design in wilmington north carolina"
                    ><Link to="/WebDesign">
                            learn more
                        </Link></a
                    >
                </div>
            </section>
            <section className={`
            ${["col"]} 
            ${classes["photo__grid"]}
            `}
            >
                <h2 hidden>des</h2>

                <figure className={classes.fig1}>
                    <a href="design">
                        <Link to="/WebDesign">
                            <img
                                width="308"
                                height="300"
                                src={lay}
                                alt="Design Layout"
                            />
                        </Link>
                    </a>
                </figure>
                <figure className={classes.fig2}>
                    <a href="design">
                        <Link to="/WebDesign">
                            <img
                                width="308"
                                height="560"
                                src={block}
                                alt="Web Design"
                            />
                        </Link>
                    </a>
                </figure>
                <figure className={classes.fig3}>
                    <a href="design">
                        <Link to="/WebDesign">
                            <img
                                width="308"
                                height="300"
                                src={html}
                                alt="HTML Code"
                            />
                        </Link>
                    </a>
                </figure>
            </section>
        </div>
    )
};

export default ServiceLeft