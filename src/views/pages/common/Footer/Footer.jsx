import React from 'react';
import logo from '../../../../assets/images/logo.png';
import discord from '../../../../assets/images/discord.svg';
import linkedin from '../../../../assets/images/linkedin.svg';
import Twitter from '../../../../assets/images/Twitter.svg';
import YouTube from '../../../../assets/images/YouTube.svg';
import UpArrow from '../../../../assets/images/UpArrow.svg';
import balloon from '../../../../assets/images/ballon.png';
import '../../../../assets/css/styles.css';

const Footer = () => {
  return (
    <>
      <div className="z-10 hidden absolute left-1 md:left-20 transform -rotate-45">
        <img src={balloon} alt="balloon" />
      </div>
      <button className="absolute right-8 mt-14 pt-3 z-50 md:hidden">
        <img src={UpArrow} alt="logo" />
      </button>

      <div className="md:px-12 py-14 mt-20 bg-primary flex text-fourth footer">
        <div className="self-center hidden md:block m-auto">
          <img src={logo} alt="logo" />
        </div>

        <div className="w-8/12 flex flex-col md:flex-row justify-evenly m-auto ml-15 md:ml-0 mt-2 text-gray-100">
          <div className="mt-8 md:mt-0">
            <h2 className="md:text-xl md:font-bold pb-1">Learn More</h2>
            <ul className="">
              <li className="py-2">About Us</li>
              <li className="py-2">Courses</li>
              <li className="py-2">Testimonials</li>
              <li className="py-2">Our Team</li>
            </ul>
          </div>

          <div className="">
            <h2 className="md:text-xl pb-3 md:font-bold md:pb-1">Contact Us</h2>
            <ul className="hidden md:block">
              <li className="py-2">Email</li>
              <li className="py-2">+91 XXXXXXXXXX</li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-xl hidden md:block font-bold pb-1">
              Follow Us
            </h2>
            <div className="self-center md:hidden mx-20 pl-5">
              <img src={logo} alt="logo" />
            </div>
            <ul className="flex justify-center items-center md:ml-0 ml-6">
              <li className="pt-5 pr-8">
                <a href="https://twitter.com/commclassroom">
                  <img className="h-6 md:h-4" src={Twitter} alt="logo" />
                </a>
              </li>
              <li className="pt-5 pr-8">
                <a href="https://www.linkedin.com/company/commclassroom/">
                  <img className="h-6 md:h-4" src={linkedin} alt="logo" />
                </a>
              </li>
              <li className="pt-5 pr-8">
                <a href="https://www.youtube.com/KunalKushwaha">
                  <img className="h-6 md:h-4" src={YouTube} alt="logo" />
                </a>
              </li>
              <li className="pt-5 pr-8">
                <a href="https://discord.io/commclassroom">
                  <img className="h-6 md:h-4" src={discord} alt="logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-4xl hidden md:block self-center pr-4">
          <button>
            <img src={UpArrow} alt="logo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
