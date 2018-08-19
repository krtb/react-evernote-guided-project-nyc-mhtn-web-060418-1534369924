import React from 'react';

const Search = (props) => {

  return (
    <div className="filter">
      <input
        value={props.searchTerm}
        onChange={(event)=> props.handleSearch(event)}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
