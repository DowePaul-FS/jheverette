import React from 'react';
import classes from './Home.module.css';
import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";
import RequestBtn from '../components/RequestBtn';
import CallToAction from '../components/CallToAction';
import Message from '../components/Message';
import ServiceLeft from '../components/ServiceLeft';
import ServiceRight from "../components/ServiceRight";

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
                <div className={classes.btn1}>
                    <RequestBtn text="request proposal" id="1" />
                </div>
            </section>
            <section className={classes.cta}>
                <CallToAction />
            </section>
            <section className={`
            ${classes["bg__color"]} 
            ${classes.msg}
            `}
            >
                <Message
                    message="Our company is structured so we can provide quality services
                        that reflect your budget. Our professional staff create unique
                        website designs to help you engage your audience and build brand
                        awareness."
                    tag="let us help!" />
            </section>
            <section className={`
            ${["container"]} 
            ${classes["svc__pos1"]}
            `}
            >
                <ServiceLeft
                    service="web design"
                    serviceTitle="Enhance Your Business"
                    serviceCopy="Effectively communicating your business story is how we approach
                        web design projects focused on your contents visibility online.
                        We incorporate modern website UX/UI design along with cutting
                        edge technology to deliver innovative ideas."
                />
            </section>
            <section className={`${["container"]} ${classes["svc__pos2"]}`}>
                <ServiceRight service="web development" serviceTitle="Cutting Edge Of Today’s Technologies" serviceCopy="We provide website development services that are on the cutting
                        edge of today’s technologies. Our development starts with
                        performance in mind and how your website or app can best serve
                        your client. Our developers are proficient in all popular web
                        technologies and uses a talented combination of power skills to
                        provide answers to common problems. We take what you have and
                        make it better." />
            </section>
        </main>
    );
}

export default Home;