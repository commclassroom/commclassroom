// Landing page goes here ...
import React from 'react';
import { Navbar, Courses, AboutUs, Testimonials, Footer } from './index';
import { LandingPage } from './index';
const HomeView = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <Courses />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeView;
