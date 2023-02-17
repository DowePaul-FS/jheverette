import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
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
                <a className={`
                ${classes["nav-name"]} 
                ${["navbar-brand"]} 
                ${["m-0"]}
                `} 
                href="#">JH.Everette & Associates
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
                    `} 
                    href="#">web design
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} 
                    href="#">web development
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} 
                    href="#">seo
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} 
                    href="#">branding
                    </a>
                    <a className={`
                    ${classes["nav-a"]} 
                    ${["nav-item"]} 
                    ${["nav-link"]}
                    `} 
                    href="#">about us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;