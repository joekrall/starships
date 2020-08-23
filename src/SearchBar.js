import React, { useState, useEffect } from "react";

const SearchBar = (props) => {

  const initialSearch = "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const handleInputChange = (event) => {

  }

  return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="search"
          onChange={event => 
            handleInputChange(event.target.value)
          }
        />
    </div>
   )
  
}


export default SearchBar