import React, { useState } from "react";
import Modal from '../UI/Modal';
import classes from './Create.module.css';
import axios from '../../API';

const Create = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const newAccountHandler = async (event) => {
        event.preventDefault();
        const post = { firstname: firstname, lastname: lastname, email: email, password: password }
        try {
            const response = await axios.post(`http://localhost:4000/users`, post)
            console.log(response.data);
        } catch (event) {
            alert(event)
        }
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
    };

    const fnameInputHandler = (event) => {
        setFirstname(event.target.value);
    }

    const lnameInputHandler = (event) => {
        setLastname(event.target.value);
    }

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Modal onClose={props.onClose}>
            <form className={`
            ${classes["rd-mailform"]} 
            ${classes["rd-mailform_responsive"]}
            `}
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action=""
                onSubmit={newAccountHandler}
            >
                <div className={`
            ${classes["form-wrap"]} 
            ${classes["form-wrap_icon"]} 
            ${classes["linear-icon-envelope"]}
            `}>
                    <input className={`
                    ${classes["form-input"]}
                    `}
                        id={["firstname"]}
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={firstname}
                        onChange={fnameInputHandler}
                        data-constraints="@Required"
                    />
                    <label className={classes["form-label"]}
                        for={["firstname"]}>
                    </label>
                </div>
                <div className={`
            ${classes["form-wrap"]} 
            ${classes["form-wrap_icon"]} 
            ${classes["linear-icon-envelope"]}
            `}>
                    <input className={`
                    ${classes["form-input"]}
                    `}
                        id={["lastname"]}
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={lnameInputHandler}
                        data-constraints="@Required"
                    />
                    <label className={classes["form-label"]}
                        for={["lastname"]}>
                    </label>
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-envelope"]}
                `}>
                    <input className={`
                    ${classes["form-input"]}`}
                        id={["modal-register-email"]}
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={emailInputHandler}
                        data-constraints="@Email @Required"
                    />
                    <label className={classes["form-label"]}
                        for={["modal-register-email"]}
                    />
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-lock"]}
                `}>
                    <input className={classes["form-input"]}
                        id={["modal-register-password"]}
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        value={password}
                        data-constraints="@Required"
                    />
                    <label className={classes["form-label"]}
                        for={["modal-register-password"]}
                    />
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-lock"]}
                `}>
                    <input className={classes["form-input"]}
                        id={["modal-register-password2"]}
                        type="password"
                        name="password2"
                        placeholder="Confirm Password"
                        value={password}
                        onChange={passwordInputHandler}
                        data-constraints="@Required"
                    />
                    <label className={classes["form-label"]}
                        for={["modal-register-password2"]}
                    />
                </div>
                <button className={`
                ${classes["button"]} 
                ${classes["button-primary"]}
                ${classes.btn}
                `}
                    type="close"
                    onClick={props.onClose}
                >Close
                </button>
                <button className={`
                ${classes["button"]} 
                ${classes["button-primary"]}
                `}
                    type="submit"
                >Create
                </button>
            </form>
        </Modal>
    );
};

export default Create;