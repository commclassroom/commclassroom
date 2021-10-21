// Landing page goes here ...
import React from 'react';
import { Navbar, AboutUs, Testimonials, Footer, LandingPage } from './index';

const HomeView = () => {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeView;
