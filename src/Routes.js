import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import LoadingScreen from './components/LoadingScreen';
import HomeView from './views/pages/HomeView/index';
import MainLayout from './layouts/MainLayout';
import Course from './views/pages/Course';
// feel free to create own routes & just rock on guys .
const Routes = () => {
  return (
    <Switch>
      <Route path="/courses">
        <MainLayout>
          <Course />
        </MainLayout>
      </Route>
      <Route path="/">
        <MainLayout>
          <HomeView />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
