import React from 'react';
import Modal from "./UI/Request/Modal";
import classes from "./Proposal.module.css";
const Proposal = (props) => {
    // const newProposalHandler = (event) => {
    //     event.preventDefault();

    // };


    return (
        <Modal onClose={props.onClose}>
            <form className={`
            ${classes["rd-mailform"]} 
            ${classes["rd-mailform_responsive"]}
            `}
                data-form-output={["form-output-global"]}
                data-form-type="contact"
                method="post"
                action="../assets/bat/rd-mailform.php"
            >

                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-envelope"]} ${classes.add}`}>
                    <input type="text" className={classes["form-input"]} id="name" name="name" placeholder="your name" required />
                    <input type="email" className={classes["form-input"]} id="email" name="email" placeholder="your email address" required />
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-envelope"]} ${classes.add}`}>
                    <input type="phone" className={classes["form-input"]} id="phone" name="phone" placeholder="phone" required />
                    <input type="textarea" className={classes["form-input"]} id="company" name="company" placeholder="company" />
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-lock"]} ${classes.add}`}>
                    <input type="text" className={classes["form-input"]} id="city" name="city" placeholder="city" required />
                    <input type="text" className={classes["form-input"]} id="state" name="state" placeholder="state" required />
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-envelope"]} ${classes.add}`}>
                    <textarea className={classes["form-input"]} id="site" placeholder="Your website or desired web address?"></textarea>
                    <textarea className={classes["form-input"]} id="compare" placeholder="List some websites where you like the design?"></textarea>
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-envelope"]} ${classes.add}`}>
                    <textarea className={classes["form-input"]} id="goal" placeholder="Your website goals?"></textarea>
                    <textarea className={classes["form-input"]} id="audience" placeholder="What is your target audience"></textarea>
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-envelope"]} ${classes.add}`}>
                    <textarea className={classes["form-input"]} id="competitor" placeholder="Please list a few of your competitors?"></textarea>
                    <textarea className={classes["form-input"]} id="cost" placeholder="What is your ideal cost for this project?"></textarea>
                </div>
                <div className={`${classes["form-wrap"]} ${classes["form-wrap_icon"]} ${classes["linear-icon-lock"]} ${classes.add}`}>
                    <div className={classes.pro}><label className={classes.flabel}>Do you require logo design?</label></div>
                    <div className={classes.pro}><input type="checkbox" class="frm__logo" id="logo" name="logo" />
                        <label for="logo" className={classes.flabel}>Yes</label></div>
                    <div className={classes.pro}><label className={classes.flabel}>Do you Require Written Copy?</label></div>
                    <div className={classes.pro}><input type="checkbox" class="frm__logo" id="copy" name="copy" />
                        <label for="copy" className={classes.flabel}>Yes</label></div>
                </div>

                <div class="start__btn">
                    <button
                        type="submit"
                        class="req__button"
                        id="request">
                        submit request
                    </button>
                    <button type="button" class="req__button" data-dismiss="modal">Close</button>
                </div>
            </form>
        </Modal >
    )
}

export default Proposal;
