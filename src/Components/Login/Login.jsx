import React from 'react'
import './Login.css';
import { MdEmail } from "react-icons/md";
import { FaLock,FaGoogle } from "react-icons/fa";
import bg from '../Assets/signup_page_img-removebg-preview.png'; // Ensure path is correct
import logo from '../Assets/signup_img2-removebg-preview.png'

export const Login = () => {
  return (
    <div className="wrapper">
      {/* Header Section */}
      <header>
        <h1>Empower Creativity, Fuel Entertainment</h1>
        <img src={bg} alt="Sign Up" className="resized-image" />

        <h3>Invest in Movies, Music & More with Filmy Funds!</h3>
        <p>Want to create a Account?&nbsp;&nbsp;
        <a href="#" class="first">Sign up</a>
        </p>
      </header>

      {/* Login Form */}
      <div className="login-container">
        <img src={logo} alt="logo" className="resized-logo" />
        <h2>Sign In</h2>
        <h1>________</h1>
        <form>
          {/* Email */}
          <div className="input-box">
            <label htmlFor="email">Email-ID/ Client ID</label>
            <div className="input-with-icon">
            <MdEmail className="input-icon" />
              <input type="email" id="email" name="email" placeholder="Enter your Email" />
            </div>
          </div>

          {/* Password */}
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input type="password" id="password" name="password" placeholder="Enter your Password" />
            </div>
          </div>
          <div className='forgot'>
            <a href='#'>Forgot Password</a>
          </div>

          {/* Sign-In */}
          <div className="actions">
            <button type="submit" className="btn-signin">Sign In</button>
            &nbsp;&nbsp;&nbsp;<span>Or</span>&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn-google">
              <FaGoogle className="google-icon" /> Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
