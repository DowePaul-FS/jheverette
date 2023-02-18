import React from 'react';
import classes from './Home.module.css';
import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";

const Home = () => {
    return (
        <main>
            <section className={classes["bg__img"]}>
                <NavBar />
                <HeroText 
                title="Quality Web Design & Development for all your Business needs." 
                text="We provide full-service website design, development, and search
                optimization services for your business. We partner with your
                company to provide professional web services and consultations"
                />
            </section>
        </main>
    );
}

export default Home;