import React, { useState } from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [data, setData] = useState({})
  console.log('data: ', data);
  const navigate = useNavigate()

  const loginPage = () => {
    navigate("/login")
  }
  const getUserData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const heandelSubmit = (e) => {
    e.preventDefault()
    console.log('data:--- ', data);
    navigate("/login")
  }
  return (
    <>
      <div class="content">
        <div class="text">Register</div>
        <form action="#" onSubmit={heandelSubmit}>
          <div class="field">
            <span class="bx bxs-user"></span>
            <input type="username" placeholder="Username" name='name' required onChange={getUserData} />
          </div>
          <div class="field">
            <span class="bx bxs-envelope"></span>
            <input type="email" placeholder="Email" name='email' required onChange={getUserData} />
          </div>
          <div class="field">
            <span class="bx bxs-lock-alt"></span>
            <input type="password" placeholder="Password" name='password' required onChange={getUserData} />
          </div>
          <button>Register</button>
          <div class="foot">
            <a>Already have an account?</a>
            <a class="in" onClick={loginPage}>Login</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register