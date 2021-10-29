// Landing page goes here ...
import React from 'react';
import { Navbar, Courses, AboutUs, Testimonials, Footer } from './index';

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <Courses />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeView;
