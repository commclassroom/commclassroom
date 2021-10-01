import React from 'react'
import logo from '../../../../assets/images/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center p-4 shadow-md'>
                <div className='flex justify-center items-center mx-4'>
                    <img src={logo} alt='logo'/>
                </div>

                <div className='flex justify-center items-center'>
                    <ul className='list-none flex justify-center items-center m-0'>
                        <li className='py-1 px-8 text-base'>Home</li>
                        <li className='py-1 px-8 text-base'>Courses</li>
                        <li className='py-1 px-8 text-base'>About Us</li>
                    </ul>

                    <div className='mx-6'>
                        <button className='text-sm border-none py-1.5 px-5 mr-3 bg-secondary text-fourth'>Login</button>
                        <button className='text-sm border border-gray-800 py-1.5 px-4 mx-3'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
