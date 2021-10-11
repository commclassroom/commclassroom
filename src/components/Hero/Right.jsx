import React from 'react';
import './style.css'; // Style from line 1 - 9
import menu from '../../assets/images/Menu.svg';
import appStore from '../../assets/static/react-web-designs/appstore_logo.svg';
import playStore from '../../assets/static/react-web-designs/playstore_logo.svg';
import Right_content from './Right_content';

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
          <Right_content />

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
