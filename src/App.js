import React, {useState} from 'react';
import { ThemeContext } from './store/context';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import { createStyles, makeStyles } from '@material-ui/core';
import Routes from './Routes';
import './App.css';
const history = createBrowserHistory();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
