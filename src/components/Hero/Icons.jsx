import React from 'react';
import './style.css'; // Style from line 19

const Icons = (props) => {
  const icons = props.icon;

  return (
    <>  
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <img src={icon} className="ml-3 Icons_style" alt="logo" />
        </React.Fragment>
      ))}
    </>
  );
};

export default Icons;
