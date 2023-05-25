import React, { useState } from 'react';
import TareaLista from './components/TareaLista';
import './App.css'; // Importa el archivo de estilos CSS personalizados

const App = () => {
  const initialCards = [
    {
      description: 'Description for Card 1',
    },
    {
      description: 'Description for Card 2',
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [cardCount, setCardCount] = useState(2); // Contador inicial de tarjetas adicionales

  const addCard = () => {
    const newCard = {
      description: `Description for Card ${cardCount + 1}`,
    };

    setCards([...cards, newCard]);
    setCardCount(cardCount + 1);
  };


  return (
    <div >
      <h1 className="">Card Gallery</h1>
      <div className="">
        <TareaLista cards={cards} setCards={setCards}/>
      </div>
      <button className="" onClick={addCard}>
        Add Card
      </button>
    </div>
  );
};

export default App;
