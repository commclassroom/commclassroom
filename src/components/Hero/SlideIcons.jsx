import React from 'react';
import left from '../../assets/static/react-web-designs/arrow_left.svg';
import right from '../../assets/static/react-web-designs/arrow_right.svg';

const SlideIcons = () => {
  return (
    <React.Fragment>
      <img
        src={left}
        className="absolute flex flex-row justify-end flex-wrap mt-12 ml-20"
      />
      <img
        src={right}
        className="absolute flex flex-row justify-end flex-wrap mt-11 ml-32 "
      />
    </React.Fragment>
  );
};

export default SlideIcons;
