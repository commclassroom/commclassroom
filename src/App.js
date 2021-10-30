import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import { createStyles, makeStyles } from '@material-ui/core';
import Routes from './Routes';
import './App.css';
import { LandingPage } from './views/pages/HomeView';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './views/pages/common/Footer/Footer';

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <LandingPage />
        <Routes />
        <Testimonials />
        <Footer />
      </Router>
    </>
  );
}

export default App;
