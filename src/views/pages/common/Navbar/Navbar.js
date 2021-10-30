import React from 'react';
import logo from '../../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-100 font-poppins">
      <div className="flex justify-between items-center p-4 shadow-md">
        <div className="flex justify-center items-center mx-4 hover:cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex justify-center items-center">
          <ul className="list-none flex justify-center items-center m-0 ">
            <li className="py-1 mx-4 text-black text-opacity-50 hover:text-opacity-100 hover:cursor-pointer hover:border-b-2 hover:border-custom active:border-b-2 active:border-custom">
              <Link to={'/home'}>HOME</Link>
            </li>
            <li className="py-1 mx-4 text-black text-opacity-50 hover:text-opacity-100 hover:cursor-pointer hover:border-b-2 hover:border-custom focus:border-b-2 focus:border-custom">
              <Link to={'/courses'}>COURSES</Link>
            </li>
            <li className="py-1 mx-4 text-black text-opacity-50 hover:text-opacity-100 hover:cursor-pointer hover:border-b-2 hover:border-custom focus:border-b-2 focus:border-custom">
              <Link to={'/aboutUs'}>ABOUT US</Link>
            </li>
          </ul>

          <div className="mx-6">
            <button className="text-sm border-none py-1.5 px-5 mr-3 bg-secondary text-fourth shadow-md">
              Login
            </button>
            <button className="text-sm border border-gray-800 py-1.5 px-4 mx-3 shadow-md">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
