import React from 'react';
import classes from './Home.module.css';
import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";
import RequestBtn from '../components/RequestBtn';
import CallToAction from '../components/CallToAction';

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
                <div className={classes["btn1"]}>
                <RequestBtn text="request proposal" />
                </div>
            </section>
            <section className={classes.cta}>
                <CallToAction />
            </section>
        </main>
    );
}

export default Home;