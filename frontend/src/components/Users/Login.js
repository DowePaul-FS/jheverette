import Modal from '../UI/Modal';
import classes from './Login.module.css';


const Login = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <form className={`
            ${classes["rd-mailform"]} 
            ${classes["rd-mailform_responsive"]}
            `} 
            data-form-output="form-output-global" 
            data-form-type="contact" 
            method="post" 
            action="bat/rd-mailform.php">
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
                    data-constraints="@Email @Required" 
                    />
                    <label className={classes["form-label"]} 
                    for={["modal-register-email"]}
                    >Your e-mail
                    </label>
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
                    data-constraints="@Required" 
                    />
                    <label className={classes["form-label"]} 
                    for={["modal-register-password"]}
                    >Your password
                    </label>
                </div>
                <button className={`
                ${classes["button"]} 
                ${classes["button-primary"]} 
                ${classes.btn}`} 
                type="close" 
                onClick={props.onClose}
                >Close
                </button>
                <button className={`
                ${classes["button"]} 
                ${classes["button-primary"]}
                `} 
                type="submit"
                >Log in
                </button>
            </form>
        </Modal>
    );
};

export default Login;