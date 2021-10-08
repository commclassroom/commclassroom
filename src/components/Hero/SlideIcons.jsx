import React from 'react';
import left from '../../assets/static/react-web-designs/arrow_left.svg';
import right from '../../assets/static/react-web-designs/arrow_right.svg';

const SlideIcons = () => {
  return (
    <React.Fragment>
      <img
        src={left}
        className="absolute flex flex-row justify-end flex-wrap"
        style={{ marginLeft: '39vw', marginTop: '-2.5vw' }}
      />

      <img
        src={right}
        className="absolute flex flex-row justify-end flex-wrap"
        style={{ marginLeft: '42vw', marginTop: '-2.8vw' }}
      />
    </React.Fragment>
  );
};

export default SlideIcons;
