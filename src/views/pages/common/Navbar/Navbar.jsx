import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../../assets/images/logo.png';
const Navbar = () => {
  const captions = ['home', 'courses', 'about us'];
  const [selected, setSelected] = useState('Home');
  return (
    <div className="sticky top-0 z-50 bg-fourth">
      <div className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center justify-center mx-4">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex items-center justify-center m-0 list-none">
            {captions.map((val, idx) => (
              <li
                className={`py-1 mx-4 text-black text-opacity-50 cursor-pointer ${
                  selected === val &&
                  'text-opacity-100 border-b-2 border-custom'
                }`}
                key={val + idx}
              >
                <Link
                  activeClass="active"
                  to={val}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => setSelected(val)}
                >
                  {val.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-6">
            <button className="text-sm border-none py-1.5 px-5 mr-3 bg-secondary text-fourth hover:bg-primary">
              Login
            </button>
            <button className="text-sm border border-gray-800 py-1.5 px-4 mx-3 hover:bg-primary hover:text-fourth">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
