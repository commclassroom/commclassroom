import React from 'react';
import { Element } from 'react-scroll';

import Page from '../../../../components/Hero/index';

const Hero = () => {
  return (
    // Main div
    <Element name="home" className="element">
      <div className="flex flex-row font-redHatDisplay">
        <Page />
      </div>
    </Element>
  );
};

export default Hero;
