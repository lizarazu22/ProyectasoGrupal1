import React from 'react';
import Tareas from './Tareas';

const TareaLista = ({ cards, setCards }) => {

  const onDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="">
      {cards.map((card, index) => (
        <Tareas
          key={index}
          index={index}
          description={card.description}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TareaLista;