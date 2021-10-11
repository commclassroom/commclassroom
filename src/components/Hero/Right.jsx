import React from 'react';
import './style.css'; // Style from line 1 - 9
import menu from '../../assets/images/Menu.svg';
import appStore from '../../assets/static/react-web-designs/appstore_logo.svg';
import playStore from '../../assets/static/react-web-designs/playstore_logo.svg';

const Right = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-2/3 bg-fourth">

        {/* Inner div 1 */}
        <div className="flex justify-end mx-8 my-16">
          <img src={menu} />
        </div>

        {/* Inner div Content */}
        <div className="ml-80 xl:ml-96 right_content">
          <h1 className="text-4xl my-2 font-bold tracking-widest">
            Quality Education.
          </h1>
          <h1 className="text-4xl my-2 font-bold tracking-widest">
            Free for all
          </h1>
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
          
          {/* Stores Icon */}
          <div className="flex flex-row">
            <img src={appStore} />
            <img src={playStore} className="mx-8" />
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default Right;
