import { useState,useEffect } from 'react'
import './App.css'

//https://pokeapi.co/api/v2/pokemon/ditto

function App() {
  const [list, setList] = useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        setList(data.results)
      }catch(error){
        console.log('Error',error)
      }
    }
    fetchData()
  },[])

  return (
    <>
      <h2>Api list</h2>
      <ul>
        {list.map((item,index)=>(
          <li key={index}>
            <h3>Name:{item.name}</h3>
            <p>Name:{item.url}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
