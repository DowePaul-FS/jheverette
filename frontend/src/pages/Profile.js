import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProfileForm from '../components/Users/ProfileForm';
import AuthBar from "../components/UI/AuthBar";

const Profile = () => {
    const isAuth = useSelector(state => state.isAuthenticated);
    const dispatch = useDispatch();
    const logOutHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.logout());
    };

    return (
        <div>
            {isAuth ? <AuthBar signOut={logOutHandler}/> : <Navigate to='/' replace={true}/>}
            <ProfileForm />
        </div>
    )
};

export default Profile