import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Col  } from "react-bootstrap";

const SearchBar = (props) => {

  const initialSearch = "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const handleInputChange = (searchTerm) => {
    props.setSearchTerm(searchTerm);
  }

  return (
        <InputGroup>
        <FormControl
          placeholder="Search by name or model"
          onChange={event => 
            handleInputChange(event.target.value)
          }
        />
        </InputGroup>

   )
  
}


export default SearchBar