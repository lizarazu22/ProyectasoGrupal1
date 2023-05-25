import React, { useState } from 'react';

const Tareas = ({index, description, onDelete }) => {
  const [tachada, setTachada] = useState(false);
  return (
    <div className="flex items-center m-5 border-2 border-black">
      <p className={"text-2xl "+(tachada? "line-through":"")}>
        {description}
      </p>
      <button
        className="h-5 w-5 bg-green-500 ml-auto"
        onClick={() => {setTachada(true)}}
      ></button>
      <button className="h-5 w-5 bg-red-500 mx-3"
       onClick={()=> {onDelete(index)}} 
      ></button>
    </div>
  );
};

export default Tareas;