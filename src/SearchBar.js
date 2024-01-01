import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search blog posts" onChange={props.handleSearch} />
      <button onClick={props.handleSearchSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
