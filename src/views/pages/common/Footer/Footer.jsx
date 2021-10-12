import React from 'react';
import logo from '../../../../assets/images/logo.png';
import discord from '../../../../assets/images/discord.svg';
import linkedin from '../../../../assets/images/linkedin.svg';
import Twitter from '../../../../assets/images/Twitter.svg';
import YouTube from '../../../../assets/images/YouTube.svg';
import UpArrow from '../../../../assets/images/UpArrow.svg';

const Footer = () => {
  return (
    <div className="px-12 py-14 bg-primary flex text-fourth">
      <div className="self-center m-auto">
        <img src={logo} alt="logo" />
      </div>

      <div className="w-8/12 flex justify-evenly m-auto text-gray-100">
        <div className="">
          <h2 className="text-xl font-bold pb-1">Learn More</h2>
          <ul className="">
            <li className="py-2">About Us</li>
            <li className="py-2">Courses</li>
            <li className="py-2">Testimonials</li>
            <li className="py-2">Our Team</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-1">Contact Us</h2>
          <ul className="">
            <li className="py-2">Email</li>
            <li className="py-2">+91 XXXXXXXXXX</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-1">Follow Us</h2>
          <ul className="flex justify-center items-center">
            <li className="py-2 pr-8">
              <img src={Twitter} alt="logo" />
            </li>
            <li className="py-2 pr-8">
              <img src={linkedin} alt="logo" />
            </li>
            <li className="py-2 pr-8">
              <img src={YouTube} alt="logo" />
            </li>
            <li className="py-2 pr-8">
              <img src={discord} alt="logo" />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-4xl self-center pr-14">
        <button>
          <img src={UpArrow} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
