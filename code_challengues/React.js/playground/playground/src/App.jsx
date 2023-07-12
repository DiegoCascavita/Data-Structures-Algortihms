import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();
        setList(data.abilities);
      } catch (error) {
        console.log('Error', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <h3>{item.ability.name}</h3>
            <p>{item.ability.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
