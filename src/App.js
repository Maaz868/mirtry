import React, { useState } from 'react';
import './App.css';
import './Header.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Router from './Router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const RouterContext = React.createContext({ basename: '/' });

function App() {
  
 

  return (
    <div className="App">
        <Header />
     <Router/>
      <Footer />
    </div>
  );
}

export default App;
