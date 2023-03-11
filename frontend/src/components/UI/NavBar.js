import React from 'react';
import classes from './NavBar.module.css';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavBar = (props) => {
    return (
        <nav className={`
        ${["navbar"]} 
        ${["navbar-expand-md"]}
        ${[classes.nav]}
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
                        <FaUserCircle className={classes.header__profMenu} />
                        <span className={classes.span}>Create Account</span>
                    </button>
                    <button className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]}
                    ${["nav-link"]}
                    ${classes.btn}
                    `} onClick={props.onShowLogin}
                    >
                        <FaUserCircle className={classes.header__profMenu}
                        />
                        <span className={classes.span}>Login</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;