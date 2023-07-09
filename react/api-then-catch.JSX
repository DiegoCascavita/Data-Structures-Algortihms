/*
se usa then para hacer una cadena de promesas syncronas
*/ 

import { useEffect, useState } from "react";
import "./styles.css";

//https://jsonplaceholder.typicode.com/users

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
      .catch(error =>{
        console.log("Error",error)
      })
  },[])

  return (
    <div className="App">
      <h2>Api</h2>
      <ul>
        {users.map(user =>(
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