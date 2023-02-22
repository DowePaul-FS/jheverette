import Modal from '../UI/Modal';
import classes from './Create.module.css';


const Create = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <form class="rd-mailform rd-mailform_responsive" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div class="form-wrap form-wrap_icon linear-icon-envelope">
                    <input class="form-input" id="modal-register-email" type="email" name="email" data-constraints="@Email @Required" />
                    <label class="form-label" for="modal-register-email">Your e-mail</label>
                </div>
                <div class="form-wrap form-wrap_icon linear-icon-lock">
                    <input class="form-input" id="modal-register-password" type="password" name="password" data-constraints="@Required" />
                    <label class="form-label" for="modal-register-password">Your password</label>
                </div>
                <div class="form-wrap form-wrap_icon linear-icon-lock">
                    <input class="form-input" id="modal-register-password2" type="password" name="password2" data-constraints="@Required" />
                    <label class="form-label" for="modal-register-password2">Confirm password</label>
                </div>
                <div class="form-wrap">
                    <label class="checkbox-inline">
                        <input type="checkbox" name="remember" />Remember me
                    </label>
                </div>
                <button class="button button-primary" type="submit" onClick={props.onClose}>Close</button>
                <button class="button button-primary" type="submit">Register</button>
            </form>
        </Modal>
    );
};

export default Create;