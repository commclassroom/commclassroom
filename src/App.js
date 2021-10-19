import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
//import { createStyles, makeStyles } from '@material-ui/core';
import Routes from './Routes'
import './App.css'
const history = createBrowserHistory()


function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
}

export default App
