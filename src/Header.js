/* Header.js */
import { useLocation } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/signin') {
    return (
      <header>
        <nav>
          <h1>The Daily Muse</h1>
          
        </nav>
      </header>
    );
  }
  return (


    
    <header>
      <nav>
        <h1 >The Daily Muse</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Feedback</Link></li>
          <li><Link to="/AddBlog">Add Blog</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
     
      </nav>
    </header>
  );
}

export default Header;
