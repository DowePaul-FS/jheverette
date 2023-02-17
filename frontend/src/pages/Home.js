import React from 'react';
import classes from './Home.module.css';
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <main>
            <section className={classes["bg__img"]}>
                <NavBar />
            </section>
        </main>
    );
}

export default Home;