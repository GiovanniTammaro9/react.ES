import React from 'react';
import TodoList from '../TodoList';

const Home = ({ items }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lista degli articoli:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <TodoList />
    </div>
  );
};

export default Home;