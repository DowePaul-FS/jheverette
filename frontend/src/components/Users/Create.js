import React, { useState } from "react";
import Modal from '../UI/Modal';
import classes from './Create.module.css';
import axios from '../../API';

const Create = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [fnameTouched, setFnameTouched] = useState(false);
    const [lnameTouched, setLnameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [password2Touched, setPassword2Touched] = useState(false);

    const newAccountHandler = async (event) => {
        event.preventDefault();
        setFnameTouched(true);
        setLnameTouched(true);
        setEmailTouched(true);
        setPasswordTouched(true);
        setPassword2Touched(true);

        if (!fnameIsValid) {
            return;
        }
        if (!lnameIsValid) {
            return;
        }
        if (!emailIsValid) {
            return;
        }
        if (!password) {
            return;
        }
        if (!password2) {
            return;
        }
        if (password !== password2) {
            return;
        }

        const post = { firstname: firstname, lastname: lastname, email: email, password: password }
        try {
            const response = await axios.post(`http://localhost:4000/users`, post)
            console.log(response.data);
        } catch (event) {
            alert(event)
        }
        setFirstname('');
        setFnameTouched(false);
        setLastname('');
        setLnameTouched(false);
        setEmail('');
        setEmailTouched(false);
        setPassword('');
        setPasswordTouched(false);
        setPassword2('');
        setPassword2Touched(false);
    };

    const fnameIsValid = firstname.trim() !== '';
    const fnameInputIsInvalid = !fnameIsValid && fnameTouched;
    const fnameInputHandler = (event) => {
        setFirstname(event.target.value);
    }
    const fnameInputBlurHandler = event => {
        setFnameTouched(true);
    };

    const lnameIsValid = lastname.trim() !== '';
    const lnameInputIsInvalid = !lnameIsValid && lnameTouched;
    const lnameInputHandler = (event) => {
        setLastname(event.target.value);
    }
    const lnameInputBlurHandler = event => {
        setLnameTouched(true);
    };

    const emailIsValid = lastname.trim() !== '';
    const emailInputIsInvalid = !emailIsValid && emailTouched;
    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    }
    const emailInputBlurHandler = event => {
        setEmailTouched(true);
    };

    const passwordIsValid = password.trim() !== '';
    const passwordInputIsInvalid = !passwordIsValid && passwordTouched;
    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    }
    const passwordInputBlurHandler = event => {
        setPasswordTouched(true);
    };

    const password2IsValid = password2.trim() !== '' && password2 === password;
    const password2InputIsInvalid = !password2IsValid && password2Touched;
    const password2InputHandler = (event) => {
        setPassword2(event.target.value);
    }
    const password2InputBlurHandler = event => {
        setPassword2Touched(true);
    };

    const fnameInputClasses = fnameInputIsInvalid ? 'form-input-invalid' : 'form-input';
    const lnameInputClasses = lnameInputIsInvalid ? 'form-input-invalid' : 'form-input';
    const emailInputClasses = emailInputIsInvalid ? 'form-input-invalid' : 'form-input';
    const passwordInputClasses = passwordInputIsInvalid ? 'form-input-invalid' : 'form-input';
    const password2InputClasses = password2InputIsInvalid ? 'form-input-invalid' : 'form-input';

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
                    ${classes[fnameInputClasses]}
                    `}
                        id={["firstname"]}
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={firstname}
                        onChange={fnameInputHandler}
                        onBlur={fnameInputBlurHandler}
                        data-constraints="@Required"
                    />
                    {fnameInputIsInvalid && <p className={classes["form-validation"]}>Firstname must not be empty</p>}
                </div>
                <div className={`
            ${classes["form-wrap"]} 
            ${classes["form-wrap_icon"]} 
            ${classes["linear-icon-envelope"]}
            `}>
                    <input className={`
                    ${classes[lnameInputClasses]}
                    `}
                        id={["lastname"]}
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={lnameInputHandler}
                        onBlur={lnameInputBlurHandler}
                        data-constraints="@Required"
                    />
                    {lnameInputIsInvalid && <p className={classes["form-validation"]}>Lastname must not be empty</p>}
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-envelope"]}
                `}>
                    <input className={`
                    ${classes[emailInputClasses]}`}
                        id={["modal-register-email"]}
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={emailInputHandler}
                        onBlur={emailInputBlurHandler}
                        data-constraints="@Email @Required"
                    />
                    {emailInputIsInvalid && <p className={classes["form-validation"]}>Email must not be empty</p>}
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-lock"]}
                `}>
                    <input className={classes[passwordInputClasses]}
                        id={["modal-register-password"]}
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        value={password}
                        onChange={passwordInputHandler}
                        onBlur={passwordInputBlurHandler}
                        data-constraints="@Required"
                    />
                    {passwordInputIsInvalid && <p className={classes["form-validation"]}>Password must not be empty</p>}
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-lock"]}
                `}>
                    <input className={classes[password2InputClasses]}
                        id={["modal-register-password2"]}
                        type="password"
                        name="password2"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={password2InputHandler}
                        onBlur={password2InputBlurHandler}
                        data-constraints="@Required"
                    />
                    {password2InputIsInvalid && <p className={classes["form-validation"]}>
                        Confirm password must match password</p>}
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