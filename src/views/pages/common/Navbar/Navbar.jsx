import React from 'react'
import logo from '../../../../assets/images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>

                <div className='links'>
                    <ul className='nav-list'>
                        <li className='nav-list-item'>Home</li>
                        <li className='nav-list-item'>Courses</li>
                        <li className='nav-list-item'>About Us</li>
                    </ul>

                    <div className='auth-buttons'>
                        <button className='login-button'>Login</button>
                        <button className='signup-button'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
