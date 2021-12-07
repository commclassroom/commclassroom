import React, { useRef, useContext } from 'react';
import './Toggle.css';
import { ThemeContext } from '../../../../store/context';

const Toggle = ({ label }) => {
  const checked = useRef(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const clickHandler = () => {
    console.log(theme)
    const check = checked.current.checked;
    if (check) setTheme('dark');
    else setTheme('light');
  };

  return (
    <div>
      <div className="container">
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            name={label}
            id={label}
            ref={checked}
            onClick={clickHandler}
          />
          <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
