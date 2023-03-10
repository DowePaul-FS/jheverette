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
                <a className={`
                ${classes["nav-name"]} 
                ${["navbar-brand"]} 
                ${["m-0"]}
                `} href="home">
                    <Link to="/Home">
                        <img
                            width="228"
                            height="70"
                            src={props.logo1}
                            alt="Logo"
                        />
                    </Link>
                </a>
                <div className={`
                ${["navbar-nav"]} 
                ${["d-none"]} 
                ${["d-md-flex"]}
                `}
                >
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} href="design">
                        <Link to="/WebDesign">
                            WEB DESIGN
                        </Link>
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} href="development">
                        <Link to="/WebDevelopment">
                            WEB DEVELOPMENT
                        </Link>
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} href="seo">
                        <Link to="/Seo">
                            SEO
                        </Link>
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} href="branding">
                        <Link to="/Branding">
                            BRANDING
                        </Link>
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} href="about">
                        <Link to="/AboutUs">
                            ABOUT US
                        </Link>
                    </a>
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