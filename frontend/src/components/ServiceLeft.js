import React from 'react';
import classes from './ServiceLeft.module.css';
import { Link } from "react-router-dom";

const ServiceLeft = (props) => {
    return (
        <div className={`
        ${["row"]} 
        ${["row-cols-2"]}
        `}
        >
            {"Explain Section"}

            <section className={["col"]}>
                <div>
                    <h3 className={["svc"]}>web design</h3>
                    <h2 className={["svc__title"]}>Enhance Your Business</h2>
                </div>
                <div>
                    <p className={`
                    ${classes["svc__para"]} 
                    ${classes["desi__pos"]}
                    `}
                    >
                        Effectively communicating your business story is how we approach
                        web design projects focused on your contents visibility online.
                        We incorporate modern website UX/UI design along with cutting
                        edge technology to deliver innovative ideas.
                    </p>
                </div>
                <div className={["svc__link"]}>
                    <a href="design" title="web design in wilmington north carolina"
                    ><Link to="/WebDesign">
                            learn more
                        </Link></a
                    >
                </div>
            </section>

            {"Photo Section"}

            <section className={`
            ${["col"]} 
            ${classes["photo__grid"]}
            `}
            >
                <h2 hidden>des</h2>

                {"Photo Grid"}

                <figure className={["fig1"]}>
                    <a href="design">
                        <Link to="/WebDesign">
                            <img
                                width="308"
                                height="300"
                                src="../images/des_lay_308_300.jpg"
                                alt="Design Layout"
                            />
                        </Link>
                    </a>
                </figure>
                <figure className={["fig2"]}>
                    <a href="design">
                        <Link to="/WebDesign">
                            <img
                                width="308"
                                height="560"
                                src="../images/des_block_308_560.jpg"
                                alt="Web Design"
                            />
                        </Link>
                    </a>
                </figure>
                <figure className={["fig3"]}>
                    <a href="design">
                        <Link to="/WebDesign">
                            <img
                                width="308"
                                height="300"
                                src="../images/des_html_308_300.jpg"
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