import React from 'react';
import classes from './Home.module.css';
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import HeroText from "../components/HeroText";
import RequestBtn from '../components/RequestBtn';
import CallToAction from '../components/CallToAction';
import Message from '../components/Message';
import ServiceLeft from '../components/ServiceLeft';
import ServiceRight from "../components/ServiceRight";
import Start from '../components/Start';
import lay from "../images/des_lay_308_300.jpg";
import block from "../images/des_block_308_560.jpg";
import html from "../images/des_html_308_300.jpg";
import code from "../images/dev_code_308_300.jpg";
import phone from "../images/dev_phone_308_560.jpg";
import prog from "../images/dev_prog_308_300_.jpg";
import seo from "../images/seo_block_308_300.jpg";
import knob from "../images/seo_knob_308_560.jpg";
import search from "../images/seo_search_308_300.jpg";
import plan from "../images/brand_plan_308_300pics.jpg";
import bulb from "../images/brand_bulb_308_560.jpg";
import tech from "../images/brand_tech_308_300.jpg";

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
                    page={<Link to="/WebDesign">
                        learn more
                    </Link>}
                    image1={lay}
                    image2={block}
                    image3={html}
                />
            </section>
            <section className={`
            ${["container"]} 
            ${classes["svc__pos2"]}
            `}
            >
                <ServiceRight
                    service="web development"
                    serviceTitle="Cutting Edge Of Today’s Technologies"
                    serviceCopy="We provide website development services that are on the cutting
                        edge of today’s technologies. Our development starts with
                        performance in mind and how your website or app can best serve
                        your client. Our developers are proficient in all popular web
                        technologies and uses a talented combination of power skills to
                        provide answers to common problems. We take what you have and
                        make it better."
                    page={<Link to="/WebDevelopment">
                        learn more
                    </Link>}
                    image1={code}
                    image2={phone}
                    image3={prog}
                />
            </section>
            <section className={`
            ${["container"]} 
            ${classes["svc__pos3"]}
            `}>
                <ServiceLeft
                    service="search optimization"
                    serviceTitle="Services That Drive Sales"
                    serviceCopy="JH.Everette knows what it takes to make sure your business is
                found through various platforms and media types. Whether you’re
                building a new website or optimizing your existing site, we’ll
                also create compelling content for maximum conversions and
                continuously review and optimize your campaigns."
                    page={<Link to="/Seo">
                        learn more
                    </Link>}
                    image1={seo}
                    image2={knob}
                    image3={search}
                />
            </section>
            <section className={`
            ${["container"]} 
            ${classes["svc__pos4"]}
            `}>
                <ServiceRight
                    service="branding"
                    serviceTitle="Tap Into Your Brand Voice"
                    serviceCopy="Our brand process begins with conversations which helps us
                understand the essence of your brand and your audience. From
                those conversations we brainstorm strategic insights and develop
                a brand ecosystem that increases the value of your company. We
                help to hone in on your goals, competitors, and ideas that will
                ensure your brand is successful."
                    page={<Link to="/Brand">
                        learn more
                    </Link>}
                    image1={plan}
                    image2={bulb}
                    image3={tech}
                />
            </section>
            <section className={classes.start}>
                <Start text="We’ve Got What You Need! Ready to Start?" />
            </section>
        </main>
    );
}

export default Home;