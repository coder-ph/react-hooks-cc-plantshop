import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input type="text" 
      value={searchTerm}
      onChange={handleSearch}
      id="search" placeholder="Type a name to search..." />
    </div>
  );
}

export default Search;
