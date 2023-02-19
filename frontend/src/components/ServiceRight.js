import React from 'react';
import classes from "./ServiceRight.module.css";

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
                            <img
                                width="308"
                                height="300"
                                src={props.image1}
                                alt="Development Code"
                            />
                </figure>
                <figure className={classes.fig2}>
                            <img
                                width="308"
                                height="560"
                                src={props.image2}
                                alt="Mobile Development"
                            />
                </figure>
                <figure className={classes.fig3}>
                            <img
                                width="308"
                                height="300"
                                src={props.image3}
                                alt="Development Programming"
                            />
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
                        {props.page}</a
                    >
                </div>
            </section>
        </div>
    );
};

export default ServiceRight;