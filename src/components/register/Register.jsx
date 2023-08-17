import React from 'react';
import './register.css';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className='reg'>
      <h1>Register</h1>
      <form className="regForm">
        <label>Username :</label>
        <input className='regInput' type="text" placeholder='Enter your name..' />
        <label>Email :</label>
        <input className='regInput' type="email" placeholder='Enter your email..' />
        <label>Password :</label>
        <input className='regInput' type="password" placeholder='Enter your password..' />
        <label>Confim Password :</label>
        <input className='regInput' type="confimpassword" placeholder='Confim your password..' />
        <button className='regBtn'>Register</button>
      </form>
      <button className='registerBtn'>
        <NavLink to='/login' className='link'>Login</NavLink>
      </button>
    </div>
  )
}

export default Register;