import React from 'react';
import TareaLista from './components/TareaLista';

const App = () => {
  const cards = [
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
    // Agrega más objetos de tarjeta aquí según tus necesidades
  ];

  return (
    <div className="app">
      <h1>Card Gallery</h1>
      <TareaLista cards={cards} />
    </div>
  );
};

export default App;
