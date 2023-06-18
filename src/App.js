import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form';
import axios from 'axios';
import Favorites from './components/Fav/Favorites';

function App() {

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);
   const username = "ft38b@gmail.com";
   const password = "123456";

   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function onSearch(character) {
      axios.get(`https://rickandmortyapi.com/api/character/${character}`)
         .then(({ data }) => {
            if (data && data.name) {
               const char = characters.find((ch) => ch.id === Number(character));
               if (char) return alert("El personaje ya existe");
               setCharacters((oldChars) => [...oldChars, data]);
               console.log(character.id);
            } else {
               window.alert('No hay personajes con ese ID!');
            }
         })
         .catch(error => {
            if (error.response && error.response.status === 404) {
               window.alert('No hay personajes con ese ID!');
            } else {
               console.error('Error en la solicitud:', error);
            }
         });
   }

   const onClose = id => {
      setCharacters(characters.filter((char) => char.id !== id))
   };

   const location = useLocation();

   return (
      <div className='App'>
         {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
         <hr />
         <Routes>
            <Route exact path='/' element={<Form login={login} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            
            <Route
               path='/home'
               element={<Cards characters={characters} onClose={onClose} />
               } />
            <Route path='/detail/:detailId' element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
