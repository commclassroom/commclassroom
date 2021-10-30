import React from 'react';

// Logo ---------------------------------
import logo from '../../assets/images/logo.png';
import gotocourse from '../../assets/static/react-web-designs/GOTO.svg';
import heroImage from '../../assets/static/react-web-designs/Hero_center_image.png';

// React components ---------------------
import Icons from './Icons.jsx';
// -------------------------------------
import { Socials } from '../../data/HomeViewData/homeviewdata';

const Left = () => {
  return (
    <div className="h-screen w-1/3 bg-fifth">
      {/* Inner Logo */}
      <br />
      <div className="flex justify-start mx-20 my-10">
        <img src={logo} />
        <img
          className="absolute h-auto w-auto lg:ml-32 lg:mt-64 md:ml-5 sm:ml-3 sm:mt-24"
          src={gotocourse}
        />
      </div>

      {/* Inner Banner */}
      <div className="container relative left-2/4 m-0 bottom-10 box-border h-auto w-auto ">
        <img src={heroImage} className="h-full w-full" />
      </div>

      {/* Socials Icons */}
      <div className="flex flex-row">
        <div className="flex flex-row justify-end lg:ml-72 lg:mb-9 mr-5 md:ml-60 md:-mt-5 items-baseline">
          <Icons icon={Socials} />
        </div>
      </div>
    </div>
  );
};

export default Left;
