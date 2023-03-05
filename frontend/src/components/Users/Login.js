import { React, useState } from "react";
import { useDispatch } from 'react-redux';
import Modal from '../UI/Modal';
import classes from './Login.module.css';
import { authActions } from '../../store';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const dispatch = useDispatch();

    const loginHandler = async (event) => {
        event.preventDefault();
        setPasswordTouched(false);
        setEmailTouched(true);
        setPasswordTouched(true);
        if (!emailIsValid) {
            return;
        }
        if (!password) {
            return;
        }

        await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeNavcsFy8CU0s2Y8QZrJaz-_Ou8HYR50`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(data => {
                    let errorMessage = 'Authentication failed!';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            dispatch(authActions.login(data.idToken));
            console.log(data);
        }).catch(err => {
            alert(err.message);
        });

        setEmail("");
        setEmailTouched(false);
        setPassword("");
        

        
    };

    const emailIsValid = email.trim() !== "";
    const emailInputIsInvalid = !emailIsValid && emailTouched;
    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    };
    const emailInputBlurHandler = (event) => {
        setEmailTouched(true);
    };

    const passwordIsValid = password.trim() !== "";
    const passwordInputIsInvalid = !passwordIsValid && passwordTouched;
    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    };
    const passwordInputBlurHandler = (event) => {
        setPasswordTouched(true);
    };

    const emailInputClasses = emailInputIsInvalid
        ? "form-input-invalid"
        : "form-input";
    const passwordInputClasses = passwordInputIsInvalid
        ? "form-input-invalid"
        : "form-input";

    return (
        <Modal onClose={props.onClose}>
            <form
                onSubmit={loginHandler}
                className={`
            ${classes["rd-mailform"]} 
            ${classes["rd-mailform_responsive"]}
            `}
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="">
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-envelope"]}
                `}
                >
                    <input className={`
                    ${classes[emailInputClasses]}
                    `}
                        id={["modal-register-email"]}
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        value={email}
                        onChange={emailInputHandler}
                        onBlur={emailInputBlurHandler}
                        data-constraints="@Email @Required"
                    />
                    {emailInputIsInvalid && (
                        <p className={classes["form-validation"]}>
                            Email must not be empty
                        </p>
                    )}
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-lock"]}
                `}
                >
                    <input className={classes[passwordInputClasses]}
                        id={["modal-register-password"]}
                        type="password"
                        name="password"
                        placeholder='Your Password'
                        value={password}
                        onChange={passwordInputHandler}
                        onBlur={passwordInputBlurHandler}
                        data-constraints="@Required"
                    />
                    {passwordInputIsInvalid && (
                        <p className={classes["form-validation"]}>
                            Password must not be empty
                        </p>
                    )}
                </div>
                <button className={`
                ${classes["button"]} 
                ${classes["button-primary"]} 
                ${classes.btn}`}
                    id='button1'
                    type="close"
                    onClick={props.onClose}
                >Close
                </button>
                <button className={`
                ${classes["button"]} 
                ${classes["button-primary"]}
                `}
                    id="button2"
                    type="submit"
                >Log in
                </button>
            </form>
        </Modal>
    );
};

export default Login;