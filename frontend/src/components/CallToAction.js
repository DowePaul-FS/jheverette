import React from 'react';
import { Link } from "react-router-dom";
import des from "../assets/images/cta_des.jpg";
import dev from "../assets/images/cta_dev.jpg";
import seo from "../assets/images/cta_seo.jpg";
import brand from "../assets/images/cta_brand.jpg";

const CallToAction = (props) => {
    return (
        <div>
            <div className={`
            ${["row"]} 
            ${["row-cols-2"]} 
            ${["row-cols-sm-2"]} 
            ${["row-cols-lg-4"]}
            `}
            >
                <figure className={["col"]}>
                    
                        <Link to="/WebDesign">
                            <img className={["img-fluid"]}
                                src={des}
                                alt="Web Design" />
                        </Link>
                    
                </figure>
                <figure className={["col"]}>
                    <a href="pic2">
                        <Link to="/WebDevelopment">
                            <img className={["img-fluid"]}
                                src={dev}
                                alt="Web Development" />
                        </Link>
                    </a>
                </figure>
                <figure className={["col"]}>
                    <a href="pic3">
                        <Link to="/Seo">
                            <img className={["img-fluid"]}
                                src={seo}
                                alt="SEO" />
                        </Link>
                    </a>
                </figure>
                <figure className={["col"]}>
                    <a href="pic4">
                        <Link to="/Branding">
                            <img className={["img-fluid"]}
                                src={brand}
                                alt="Branding" />
                        </Link>
                    </a>
                </figure>
            </div>
        </div>
    );
};

export default CallToAction;