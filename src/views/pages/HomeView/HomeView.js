// Landing page goes here ...
import React from 'react';
import { Navbar, AboutUs, Testimonials, Footer } from './index';

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeView;
