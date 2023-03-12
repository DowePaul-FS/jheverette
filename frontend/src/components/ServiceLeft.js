import React from 'react';
import classes from './ServiceLeft.module.css';

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
                    {props.page}
                </div>
            </section>
            <section className={`
            ${["col"]} 
            ${classes["photo__grid"]}
            `}
            >
                <h2 hidden>des</h2>

                <figure className={classes.fig1}>
                    <img
                        width="308"
                        height="300"
                        src={props.image1}
                        alt="Design Layout"
                    />
                </figure>
                <figure className={classes.fig2}>
                    <img
                        width="308"
                        height="560"
                        src={props.image2}
                        alt="Web Design"
                    />
                </figure>
                <figure className={classes.fig3}>
                    <img
                        width="308"
                        height="300"
                        src={props.image3}
                        alt="HTML Code"
                    />
                </figure>
            </section>
        </div>
    )
};

export default ServiceLeft