import React from 'react';
import balloon from '../../assets/images/ballon.png';
import group from '../../assets/images/Group55.png';

const AboutUs = () => {
  return (
    <div className="px-14 pt-24 relative font-redHatDisplay">
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold">
          What makes our FREE courses much better than most of the PAID courses
          ?
        </h2>
      </div>

      <div className="absolute top-6 right-1/4">
        <img src={balloon} alt="balloon" />
      </div>

      <div className="my-14 flex justify-center items-center">
        <img src={group} alt="Group55" />
        <div className="px-8 py-14">
          <h1 className="text-6xl -mt-4 mb-4 font-bold">About Us</h1>
          <p className="text-xl pb-3">
            We believe that every student, irrespective of their college or
            branch, can make it big. Community Classroom is an initiative built
            on this thought. The organisation is founded by Kunal Kushwaha and
            Rahul Rana. We provide hands-on training, mentorship and have an
            inclusive community.
          </p>
          <p className="text-xl pb-3">
            All of our courses are FREE and better than most paid courses. We
            cover every topic in detail and mentor you to stand out and get
            opportunities by breaking all the barriers.
          </p>
          <p className="text-xl pb-3">
            Get expert guidance with career, Open Source, and internships, jobs
            around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
