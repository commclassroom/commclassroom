import React from 'react';
import './style.css';  // Style started from line 10 - 17.
import left from '../../assets/static/react-web-designs/arrow_left.svg';
import right from '../../assets/static/react-web-designs/arrow_right.svg';

const SlideIcons = () => {
  return (
    <React.Fragment>
      <img
        src={left}
        className="absolute flex flex-row justify-end flex-wrap slideIcons_left"
      />

      <img
        src={right}
        className="absolute flex flex-row justify-end flex-wrap slideIcons_right"
      />
    </React.Fragment>
  );
};

export default SlideIcons;
