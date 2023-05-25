import React from 'react';
import Tareas from './Tareas';

const TareaLista = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Tareas
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default TareaLista;