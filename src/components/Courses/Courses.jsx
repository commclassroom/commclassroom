import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';

// import prevButton from '../../assets/static/arrowLeft.png';
// import nextButton from '../../assets/static/arrowRight.png';
import balloon from '../../assets/static/react-web-designs/ballon.svg';
import blob from '../../assets/static/react-web-designs/courses_blob_cropped.png';
import { courses } from '../../data/Courses/course';

const Courses = () => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setCourse(courses);
    setLoading(false);
  });

  if (loading == true) {
    return <div>Loading...</div>;
  }

  return (
    <Element name="courses" className="element">
      {/* balloon */}
      <div className="absolute left-0 top-80">
        <img src={balloon} alt="balloon" />
      </div>

      {/* blob */}
      <div className="absolute right-24 top-42">
        <div className=" transform scale-125">
          <img src={blob} />
        </div>
      </div>

      <h2 className="text-xl mt-24 md:mx-40 mx-14 text-secondary font-bold filter drop-shadow-xl">
        Courses
      </h2>

      <div className="my-6 md:ml-40 mx-3 flex flex-col md:flex-row">
        <div className="mb-16 md:mr-32 md:ml-0 ml-10">
          {/* heading */}
          <h1 className="text-4xl font-black">
            Courses that are
            <br />
            <span className="text-secondary">custom </span>tailered for you
          </h1>

          {/* image */}
          <div className="flex-1 md:hidden mt-10">
            <img
              className="rounded-2xl transform scale-125"
              src={course[value].image}
              alt={course[value].title}
            />
          </div>

          <div className="flex">
            {/* bullets */}
            <div className="flex md:hidden">
              {course.map((course) => (
                <div key={course.key} className="text-third flex mx-4 text-xl">
                  <span className={`${course.key === value && 'text-primary'}`}>
                    &#9632;
                  </span>
                </div>
              ))}
            </div>

            {/* prev next buttons */}
            <div className="flex md:hidden ml-6 space-x-2 mt-2 transform scale-150 filter drop-shadow-xl">
              <div
                className="ml-24 "
                onClick={() => {
                  value === 0
                    ? setValue(course.length - 1)
                    : setValue(value - 1);
                }}
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer transform hover:scale-150 filter drop-shadow-xl" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div
                onClick={() => {
                  value === course.length - 1
                    ? setValue(0)
                    : setValue(value + 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer transform hover:scale-150 filter drop-shadow-xl" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* list of courses */}
          <div className="font-bold text-xl md:mt-24 mt-20 leading-10 text-third">
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

        {/* image */}
        <div className="md:flex flex-1 hidden">
          <img
            className="rounded-2xl transform scale-125"
            src={course[value].image}
            alt={course[value].title}
          />
        </div>
      </div>

      <div className="flex mx-40 md:mb-40 mb-20 text-center ">
        {/* get started button */}
        <div className="flex-1 filter drop-shadow-xl">
          <button
            className="text-sm border-none py-1.5 px-5 mr-3 bg-secondary text-fourth rounded-md"
            onClick={() => {
              location.href = course[value].link;
            }}
          >
            Get Started
          </button>
        </div>

        {/* bullets */}
        <div className="mx-40 md:flex hidden">
          {course.map((course) => (
            <div key={course.key} className="text-third flex mx-4 text-xl">
              <span className={`${course.key === value && 'text-primary'}`}>
                &#9632;
              </span>
            </div>
          ))}
        </div>

        {/* prev next buttons */}
        <div className="md:flex space-x-4 hidden mt-2 flex-1 transform scale-150 filter drop-shadow-xl">
          <div
            className="ml-24 "
            onClick={() => {
              value === 0 ? setValue(course.length - 1) : setValue(value - 1);
            }}
          >
            {/* <img src={prevButton} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer transform hover:scale-150 filter drop-shadow-xl" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            
            
          </div>
          <div
            onClick={() => {
              value === course.length - 1 ? setValue(0) : setValue(value + 1);
            }}
          >
            {/* <img src={nextButton} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer transform hover:scale-150 filter drop-shadow-xl" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Courses;
