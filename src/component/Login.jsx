import React, { useState } from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import axios from 'axios';
import { setToken } from '../redux/slice';
const Login = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const dispathch = useDispatch()
    const RegisterPage = () => {
        navigate("/")
    }
    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const heandelSubmit = async (e) => {
        e.preventDefault()
        await axios("http://restapi.adequateshop.com/api/authaccount/login", {
            method: 'post',
            data: user,
        }).then((res) => {
            console.log('res: ', res);
            dispathch(setToken((res?.data?.data?.Token)))
        })
        navigate("/dashboard")
    }
    return (
        <div class="content">
            <div class="text">Login</div>
            <form onSubmit={heandelSubmit}>
                <div class="field">
                    <span class="bx bxs-envelope"></span>
                    <input type="email" placeholder="Email" onChange={getUserData} name='email' required />
                </div>
                <div class="field">
                    <span class="bx bxs-lock-alt"></span>
                    <input type="password" placeholder="Password" onChange={getUserData} name='password' required />
                </div>
                <button>Login</button>
                <div class="foot">
                    <a>You  have No account?</a>
                    <a class="in" onClick={RegisterPage}>Register</a>
                </div>
            </form>
        </div>
    )
}

export default Login