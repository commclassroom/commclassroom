import React from 'react';

const Icons = (props) => {
  const icons = props.icon;

  return (
    <>
      {icons.map((icon, index) => (
        <a href={icon.link} key={index} target="_blank" rel="noreferrer">
          <img src={icon.src} className="ml-3 w-max" alt="logo" />
        </a>
      ))}
    </>
  );
};

export default Icons;
