import React, { useState } from 'react';
import TareaLista from './components/TareaLista';
import './App.css'; // Importa el archivo de estilos CSS personalizados

const App = () => {
  const initialCards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'https://example.com/card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'https://example.com/card2.jpg',
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [cardCount, setCardCount] = useState(2); // Contador inicial de tarjetas adicionales

  const addCard = () => {
    const newCard = {
      title: `Card ${cardCount + 1}`,
      description: `Description for Card ${cardCount + 1}`,
      image: `https://example.com/card${cardCount + 1}.jpg`,
    };

    setCards([...cards, newCard]);
    setCardCount(cardCount + 1);
  };

  return (
    <div className="app">
      <h1 className="title">Card Gallery</h1>
      <div className="centered-container">
        <TareaLista cards={cards} />
      </div>
      <button className="add-card-button" onClick={addCard}>
        Add Card
      </button>
    </div>
  );
};

export default App;
