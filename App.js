import React,{useState} from 'react';
import 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Recipe from './pages/Recipe.js';
import Contact from './pages/Contact.js';
import Login from './pages/Loginpage.jsx';
import Register from './pages/Register.jsx';

import { Routes,Route } from 'react-router-dom';
const App =() => {
  return(
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Recipe' element={<Recipe/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
    </Routes>
    </div>
  )
}
export default App;
