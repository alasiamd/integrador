import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  // const username = 'mail@gmail.com';
  // const password = 'pass123';
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setCharacters([...characters, data])
          : alert("QUE PACHOOOOOO?????");
      })
      .catch((error) => console.log(error));
  };
  useEffect(()=>{console.log(access)},[access])
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  function login(userData) {
    
    const { username, password } = userData;
    console.log(typeof username + '  ' + typeof username)
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(`${URL}?email=${username}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  // const login = (userData) => {
  //   if (userData.username === username && userData.password === password) {
  //     setAccess(true);
  //     navigate('/home')
  //   }
  //   else{
  //     alert("Datos incorrectos")
  //   }
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <hr />
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
      {/* <Cards
          characters={characters} onClose={onClose}
        />      */}
    </div>
  );
}

export default App;
