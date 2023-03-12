import React from 'react';
import classes from './AuthBar.module.css';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const AuthBar = (props) => {

    return (
        <nav className={`
        ${["navbar"]} 
        ${["navbar-expand-md"]}
        `}
        >
            <div className={`
            ${["container-fluid"]} 
            ${["m-0"]}
            `}
            >
                <Link
                    className={`
                    ${classes["nav-name"]} 
                    ${["navbar-brand"]} 
                    ${["m-0"]}
                    `}
                    to="/">
                    <img
                        width="228"
                        height="70"
                        src={props.logo1}
                        alt="Logo"
                    />
                </Link
                >
                <div className={`
                ${["navbar-nav"]} 
                ${["d-none"]} 
                ${["d-md-flex"]}
                `}
                >
                    <Link
                        className={`
                        ${classes["nav-a"]} 
                        ${["nav-item"]} 
                        ${["nav-link"]}
                        `}
                        to="/WebDesign">
                        WEB DESIGN
                    </Link>
                    <Link
                        className={`
                        ${classes["nav-a"]} 
                        ${["nav-item"]} 
                        ${["nav-link"]}
                        `}
                        to="/WebDevelopment">
                        WEB DEVELOPMENT
                    </Link>
                    <Link
                        className={`
                        ${classes["nav-a"]} 
                        ${["nav-item"]} 
                        ${["nav-link"]}
                        `}
                        to="/Seo">
                        SEO
                    </Link>
                    <Link
                        className={`
                        ${classes["nav-a"]} 
                        ${["nav-item"]} 
                        ${["nav-link"]}
                        `}
                        to="/Branding">
                        BRANDING
                    </Link>
                    <Link
                        className={`
                        ${classes["nav-a"]} 
                        ${["nav-item"]} 
                        ${["nav-link"]}
                        `}
                        to="/AboutUs">
                        ABOUT US
                    </Link>
                    <button className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]}
                    ${["nav-link"]}
                    ${classes.btn}
                    `} onClick={props.onShowCreate}
                    >
                        <Link to="/Profile">
                            <FaUserCircle className={classes.header__profMenu} />
                            <span className={classes.span}>Profile</span>
                        </Link>
                    </button>
                    <button className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]}
                    ${["nav-link"]}
                    ${classes.btn}
                    `}
                        type='close'
                        onClick={props.signOut}
                    >
                        <FaUserCircle className={classes.header__profMenu}
                        />
                        <span className={classes.span}>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default AuthBar;