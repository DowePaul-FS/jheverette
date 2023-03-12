import React from 'react';
import classes from './HeroText.module.css';

const HeroText = (props) => {
    return (
        <div className={`
        ${["container"]} 
        ${classes["hero__text"]}
        `}
        >
            <article className={`
            ${["row"]} 
            ${["row-cols-1"]}
            `}
            >
                <h2 className={` 
                ${["col"]} 
                ${["col"]}
                ${classes["hero__title"]}
                `}
                >
                    {props.title}
                </h2>
                <p className={`
                ${["col"]}
                ${classes["hero__para"]}
                `}
                >
                    {props.text}
                </p>
            </article>
        </div>
    );
};

export default HeroText;