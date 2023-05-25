import React from 'react';

const Tareas = ({ description }) => {
  return (
    <div className="m-5 border-2 border-black">
      <p>{description}</p>
    </div>
  );
};

export default Tareas;