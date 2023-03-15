import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { Routes, Route } from 'react-router-dom'

function App () {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
      .then((data) => {
        (data.name ? characters.filter((char)=> char.id === data.id).length === 0 : "") 
        ? setCharacters([...characters, data]):alert("QUE PACHOOOOOO?????")        
      }      
      )
      .catch((error) => console.log(error));
  }

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered)
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <hr />
      <Routes>
        
      </Routes>
        <Cards
          characters={characters} onClose={onClose}
        />     
      
    </div>
  )
}

export default App
