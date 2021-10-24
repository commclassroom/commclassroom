import React from 'react';
import logo from '../../../../assets/images/logo.png';

const Navbar = () => {
  const captions = ['Home', 'Courses', 'About us'];

  return (
    <div className={'sticky top-0 z-50 bg-white bg-opacity-100 font-Poppins'}>
      <div className="flex justify-between items-center p-4 shadow-md bg-black">
        <div className="flex justify-center items-center mx-4">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex justify-center items-center">
          <ul className="list-none flex justify-center items-center m-0 hover:bg-black">
            {captions.map((val, idx) => (
              <li className="py-1 px-8 text-black text-opacity-50 hover:text-opacity-100" key={val + idx}>
                {val.toUpperCase()}
              </li>
            ))}
          </ul>

          <div className="mx-6">
            <button className="text-sm border-none py-1.5 px-5 mr-3 bg-secondary text-fourth">
              Login
            </button>
            <button className="text-sm border border-gray-800 py-1.5 px-4 mx-3">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
