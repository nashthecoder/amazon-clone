import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase.js';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => console.warn(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //user successfully created with email and password
            if (auth) {
                history.push('/profile')
            }
                console.log(auth);
            }) 
            .catch(error =>console.warn(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className='login_container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e =>setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>

                <p> By signing-in you agree to AMAZON FAKE CLONE
                Conditions of Use & Sale. Please see our Privacy Notice, 
                our Cookies Notice and our Interest_based Ads Notice
                </p>

                <button type='submit' onClick={register} className='login_registerButton'>Create your Amazon Account </button>



            </div>
        </div>
    )
}

export default Login
