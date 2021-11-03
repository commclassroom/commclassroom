import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './views/pages/common/Navbar/Navbar';
import Hero from './components/Hero';
import AboutUs from './views/pages/AboutUs/AboutUs';
import Course from './views/pages/Course';
// feel free to create own routes & just rock on guys .
const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/courses">
          <Course />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
