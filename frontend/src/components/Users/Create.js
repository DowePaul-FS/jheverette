import Modal from '../UI/Modal';
import classes from './Create.module.css';


const Create = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <form className={`${classes["rd-mailform"]} ${classes["rd-mailform_responsive"]}`} data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-envelope"]}`}>
                    <input className={`${classes["form-input"]}`} id={["modal-register-email"]} type="email" name="email" data-constraints="@Email @Required" />
                    <label className={classes["form-label"]} for={["modal-register-email"]}>Your e-mail</label>
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-lock"]}`}>
                    <input className={classes["form-input"]} id={["modal-register-password"]} type="password" name="password" data-constraints="@Required" />
                    <label className={classes["form-label"]} for={["modal-register-password"]}>Your password</label>
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-lock"]}`}>
                    <input className={classes["form-input"]} id={["modal-register-password2"]} type="password" name="password2" data-constraints="@Required" />
                    <label className={classes["form-label"]} for={["modal-register-password2"]}>Confirm password</label>
                </div>
                <div className={classes["form-wrap"]}>
                    <label className={classes["checkbox-inline"]}>
                        <input type="checkbox" name="remember" />Remember me
                    </label>
                </div>
                <button className={`${classes["button"]} ${classes["button-primary"]}`} type="close" onClick={props.onClose}>Close</button>
                <button className={`${classes["button"]} ${classes["button-primary"]}`} type="submit">Register</button>
            </form>
        </Modal>
    );
};

export default Create;