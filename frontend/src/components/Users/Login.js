import { React } from "react";
import { useDispatch } from 'react-redux';
import Modal from '../UI/Modal';
import classes from './Login.module.css';
import { authActions } from '../../store';

const Login = (props) => {
    const dispatch = useDispatch();

    const loginHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.login());
    };

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
                    ${classes["form-input"]}
                    `}
                        id={["modal-register-email"]}
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        data-constraints="@Email @Required"
                    />
                </div>
                <div className={`
                ${classes["form-wrap"]} 
                ${classes["form-wrap_icon"]} 
                ${classes["linear-icon-lock"]}
                `}
                >
                    <input className={classes["form-input"]}
                        id={["modal-register-password"]}
                        type="password"
                        name="password"
                        placeholder='Your Password'
                        data-constraints="@Required"
                    />
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