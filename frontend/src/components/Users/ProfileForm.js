import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const ProfileForm = (event) => {
    
    const [password, setPassword] = useState("");

    const authSel = useSelector(state => state.token);

    const newPasswordHandler = async (event) => {
        event.preventDefault();

        await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCeNavcsFy8CU0s2Y8QZrJaz-_Ou8HYR50`,
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: authSel,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log(data);
        }).catch(err => {
            alert(err.message);
        });

    };

    const enteredNewPassword = (event) => {
        setPassword(event.target.value);

        
    };

    return (
        <form onSubmit={newPasswordHandler}>
            <div>
                <label htmlFor="new-password">New Password</label>
                <input type='password' id='new-password' minLength='8' value={password} onChange={enteredNewPassword}></input>
            </div>
            <div>
                <button>Change Password</button>
            </div>
        </form>
    );
};


export default ProfileForm;