/*
para peticiones asyncronas we usa await para esperar a la respuesta de la promesa para continuar
*/ 
import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>Api</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>zipcode: {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
//code sandbox