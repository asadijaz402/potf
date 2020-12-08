import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';
function Login() {
    const [state,  dispatch]=useStateValue();
    const signin=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result.user)
        }).catch(error=>alert(error.message));
    }
    return (
        <div className='login'>
        <div className='login__logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png' alt='logo' />
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='text logo'/>
        </div>
            <Button
            type='submit'
            onClick={signin}
            >Sing In</Button>
        </div>
    )
}

export default Login
