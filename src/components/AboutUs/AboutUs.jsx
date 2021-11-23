import React from 'react';
import { Element } from 'react-scroll';
import balloon from '../../assets/images/ballon.png';
import group from '../../assets/images/Group55.png';

const AboutUs = () => {
  return (
    <Element name="about us" className="element">
      <div className="relative pt-24 px-14 font-redHatDisplay">
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold">
            What makes our FREE courses much better than most of the PAID
            courses ?
          </h2>
        </div>

        <div className="absolute top-6 right-1/4">
          <img src={balloon} alt="balloon" />
        </div>

        <div className="flex items-center justify-center my-14">
          <img src={group} alt="Group55" />
          <div className="px-8 py-14">
            <h1 className="mb-4 -mt-4 text-6xl font-bold">About Us</h1>
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
