import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import { connect } from "react-redux";
import { removeFavorites } from "./redux/actions";

function App({ removeFavorites }) {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "JoseAntonio",
    password = "1234";

  const location = useLocation();
  const navigate = useNavigate();

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/");
    }
  }

  function logout() {
    if (access) {
      setAccess(false);
    }
  }

  useEffect(() => {
    !access && navigate("/login");
  }, [access]);

//change
  function onSearch(character) {
    const chars = [...characters];
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (chars.find((char) => char.id === data.id)) {
          window.alert("El personaje ya esta agregado");
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(e) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== Number(e.target.parentElement.id)));
    removeFavorites(e.target.parentElement.id);
  }
  return (
    <div className="App">
      {/* {location.pathname !== "/login" ? <Nav onSearch={onSearch} /> : null} */}

      {location.pathname !== "/login" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/login" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}
export function mapDispatchToProps(dispatch) {
  return {
    removeFavorites: (id) => dispatch(removeFavorites(id)),
  };
}

export default connect(null, mapDispatchToProps)(App);
