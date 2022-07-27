import React from 'react';

const ProjectButton = (prop) => {
  const { text } = prop;
  return (
    <>
      <a className="ProjectButton">{text}</a>
    </>
  );
};

export default ProjectButton;
