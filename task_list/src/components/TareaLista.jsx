import React from 'react';
import Tareas from './Tareas';

const TareaLista = ({ cards }) => {
  return (
    <div className="">
      {cards.map((card, index) => (
        <Tareas
          key={index}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default TareaLista;