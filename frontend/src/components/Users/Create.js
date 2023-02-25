import Modal from '../UI/Modal';
import classes from './Create.module.css';


const Create = (props) => {
    const newAccountHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Modal onClose={props.onClose}>
            <form className={`
            ${classes["rd-mailform"]} 
            ${classes["rd-mailform_responsive"]}
            `}
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
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
                    onClick={newAccountHandler}
                >Create
                </button>
            </form>
        </Modal>
    );
};

export default Create;