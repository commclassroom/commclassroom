import React from 'react';

const Right_content = () => {
  return (
    <>
      <b>
        {/* Bold all text content */}
        <h1 className="text-4xl tracking-widest">
          Quality Education.<br/><br/>  
          Free for all
       </h1>
        <br />
        <h3>We provide FREE hands-on training,<br />mentorship and have an inclusive community.</h3>
        <br />
        <button className="bg-secondary w-20 rounded-lg p-1 shadow-secondary">
          <b>Join us</b>
        </button>
        <br /><br />
        <h3 className="tracking-wide ">or download the app:</h3>
      </b>
      <br />
    </>
  );
};

export default Right_content;
