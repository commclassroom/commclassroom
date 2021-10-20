import React, { useState } from 'react';

//import icons
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';
import balloon from '../../assets/images/ballon.png';

//import banners
import dsa from '../../assets/static/react-web-designs/course_banners/light-theme/dsa.png';
import webdev from '../../assets/static/react-web-designs/course_banners/light-theme/webdev.png';
import opensource from '../../assets/static/react-web-designs/course_banners/light-theme/opensource.png';
import devops from '../../assets/static/react-web-designs/course_banners/light-theme/devops.png';

const course = [
  {
    key: 0,
    title: 'Data Structures and Algorithms',
    image: dsa
  },
  {
    key: 1,
    title: 'Web Development',
    image: webdev
  },
  {
    key: 2,
    title: 'Open Source',
    image: opensource
  },
  {
    key: 3,
    title: 'DevOps',
    image: devops
  }
];

const Courses = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div className="absolute left-0 top-80 transform scale-125 ">
        <img src={balloon} alt="balloon" />
      </div>

      <h2 className="text-xl mt-24 mx-40 text-secondary font-bold filter drop-shadow-xl">
        Courses
      </h2>

      <div className="my-6 mx-40 flex">
        <div className="">
          <h1 className="text-4xl font-black">
            Courses that are
            <br />
            <span className="text-secondary">custom</span> tailered for you
          </h1>
          <div className="font-bold text-xl mt-24 leading-10 text-third">
            {course.map((course) => (
              <ul key={course.key} onClick={() => setValue(course.key)}>
                <span className={`${course.key === value && 'text-secondary'}`}>
                  0{course.key + 1}
                </span>
                &emsp;
                <span className={`${course.key === value && 'text-primary'}`}>
                  {course.title}
                </span>
              </ul>
            ))}
          </div>
        </div>
        <div className="">
          <img
            className="rounded-2xl object-center"
            src={course[value].image}
            alt={course[value].title}
          />
        </div>
      </div>

      <div className="flex mx-40 mb-40 text-center">
        <div className="flex-1">
          <button className="text-sm border-none py-1.5 px-5 mr-3 bg-secondary text-fourth rounded-md">
            Get Started
          </button>
        </div>

        <div className="mx-40 flex">
          {course.map((course) => (
            <div key={course.key} className="text-third flex mx-6 text-xl">
              <span className={`${course.key === value && 'text-primary'}`}>
                &#9632;
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-1 text-3xl text-primary">
          <div
            className="ml-24 mr-4"
            onClick={() => {
              if (value === 0) {
                setValue(course.length - 1);
              } else {
                setValue(value - 1);
              }
            }}
          >
            <BsArrowLeftCircle />
          </div>
          <div
            onClick={() => {
              if (value === course.length - 1) {
                setValue(0);
              } else {
                setValue(value + 1);
              }
            }}
          >
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
