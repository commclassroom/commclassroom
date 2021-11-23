import React from 'react';
import menu from '../../assets/images/Menu.svg';
import appStore from '../../assets/static/react-web-designs/appstore_logo.svg';
import playStore from '../../assets/static/react-web-designs/playstore_logo.svg';
import Right_content from './Right_content';
import SlideIcons from './SlideIcons.jsx';

const Right = () => {
  return (
    <React.Fragment>
      <div className="h-screen w-2/3 bg-fourth">
        {/* Inner div 1 */}
        <div className="flex justify-end mx-8 my-16">
          <img src={menu} />
        </div>

        {/* Inner div Content */}
        <div className="xl:ml-80 sm:ml-48 mt-32 h-auto w-auto ">
          <Right_content />
          {/* Stores Icon */}
          <div className="flex flex-row">
            <img src={appStore} />
            <img src={playStore} className="mx-8" />
          </div>
        </div>
        <SlideIcons />
      </div>
    </React.Fragment>
  );
};

export default Right;
