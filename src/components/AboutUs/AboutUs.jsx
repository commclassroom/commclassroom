import React from 'react';
import { Element } from 'react-scroll';
import balloon from '../../assets/images/ballon.png';
import group from '../../assets/images/Group55.png';

const AboutUs = () => {
  return (
    <Element name="about us" className="element">
      <div className="relative pt-24 md:px-14 font-redHatDisplay">
        <div className="md:w-1/2 mx-12">
          <h2 className="text-3xl font-semibold">
            What makes our FREE courses much better than most of the PAID
            courses ?
          </h2>
        </div>

        <div className="absolute top-28 md:top-10 left-6 md:right-1/4">
          <img src={balloon} alt="balloon" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center my-14">
          <img className="hidden md:flex" src={group} alt="Group55" />
          <div className="px-8 py-14">
            <h1 className="mb-10 absolute mr-5 md:mr-0 md:static right-6 md:mb-4 -mt-12 md:-mt-4 text-4xl md:text-6xl font-semibold border-b-4 md:border-none border-custom">
              About Us
            </h1>
            <img className="md:hidden mt-10" src={group} alt="Group55" />
            <p className="pb-3 text-xl">
              We believe that every student, irrespective of their college or
              branch, can make it big. Community Classroom is an initiative
              built on this thought. The organisation is founded by Kunal
              Kushwaha and Rahul Rana. We provide hands-on training, mentorship
              and have an inclusive community.
            </p>
            <p className="pb-3 text-xl">
              All of our courses are FREE and better than most paid courses. We
              cover every topic in detail and mentor you to stand out and get
              opportunities by breaking all the barriers.
            </p>
            <p className="pb-3 text-xl">
              Get expert guidance with career, Open Source, and internships,
              jobs around the world.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;
