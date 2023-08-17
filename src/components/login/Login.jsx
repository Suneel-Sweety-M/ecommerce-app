import React from 'react';
import './login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form className="loginForm">
        <label>Email :</label>
        <input className='loginInput' type="email" placeholder='Enter your email..' />
        <label>Password :</label>
        <input className='loginInput' type="password" placeholder='Enter your password..' />
        <button className='loginBtn'>Login</button>
      </form>
      <button className='registerBtn'>
        <NavLink to='/register' className='link'>Register</NavLink>
      </button>
    </div>
  )
}

export default Login;