import React from 'react';
import classes from './Home.module.css';
import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";
import RequestBtn from '../components/RequestBtn';
import CallToAction from '../components/CallToAction';
import Message from '../components/Message';

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
                    <RequestBtn text="request proposal" id="1" />
                </div>
            </section>
            <section className={classes.cta}>
                <CallToAction />
            </section>
            <section className={`${classes["bg__color"]} ${classes.msg}`}>
                <Message message="Our company is structured so we can provide quality services
                        that reflect your budget. Our professional staff create unique
                        website designs to help you engage your audience and build brand
                        awareness." tag="let us help!" />
            </section>
        </main>
    );
}

export default Home;