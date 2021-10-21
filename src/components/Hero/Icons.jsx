import React from 'react';

const Icons = (props) => {
  const icons = props.icon;

  return (
    <>  
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <img src={icon} className="ml-3 w-max" alt="logo" />
        </React.Fragment>
      ))}
    </>
  );
};

export default Icons;
