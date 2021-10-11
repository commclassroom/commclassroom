import React from 'react';
import './style.css' // Style started from line 8

const Right_content = () => {
  return (
    <>
      <h1 className="text-4xl my-2 font-bold tracking-widest">
        Quality Education.
      </h1>
      <h1 className="text-4xl my-2 font-bold tracking-widest">Free for all</h1>
      <br />
      <h3 className="font-semibold">We provide FREE hands-on training,</h3>
      <h3 className="font-semibold">
        mentorship and have an inclusive community.
      </h3>
      <button className="bg-secondary w-20 my-3 rounded-lg p-1 font-bold right_button">
        Join us
      </button>
      <br />
      <h3 className="font-black shadow-2xl tracking-wide ">
        or download the app:
      </h3>
      <br />
    </>
  );
};

export default Right_content;
