import React, { useContext, useEffect, useRef, useState } from 'react'

import axios from 'context/axios'

import './Login.css'
import logo from 'assets/logo.svg'
import AuthContext from 'context/AuthProvider'

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, success])


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('login',
                {
                    // email: 'eve.holt@reqres.in',//email,
                    email: user,
                    // password: 'cityslicka'//password,
                    password: pwd
                }
            )
            const accessToken = response?.data?.token;
            setAuth({ user, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
            console.log('Token:' + accessToken);
        } catch (error) {
            console.log(error);
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }
    return (
        <section className='Login'>
            <div className="col">
                <h3>Inicia sesión con tu cuenta Uninorte</h3>
                <div className="row">
                    <img src={logo} alt='logo' width='48' />
                    <h2 className='thin'>Uninorte</h2>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-inner">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name='username' id='username' ref={userRef} onChange={(e) => setUser(e.target.value)}
                            value={user}
                        // required
                        />
                    </div>
                    <div className="form-inner">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name='password' id='password' onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                        // required 
                        />
                    </div>
                    <p className='error'>{errMsg}</p>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </section>
    )
}

export default Login
