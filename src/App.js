import React, { useState, useEffect } from "react";
import StarshipTable from './Table';
import SearchBar from './SearchBar'
import * as Utils from './utilities'
import { Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [starships, setStarships] = useState([]);
  const [count, setCount] = useState(0);
  


  useEffect(() => {
    new Promise((resolve, reject) => {
      Utils.getStarships(`https://swapi.dev/api/starships/?search=${searchTerm}`, [], resolve, reject)
    })
      .then(response => {
        setCount(response.length);
        setStarships(response);
      })
  }, [searchTerm]);


  return (
    <div className="App">
      <Col md={4} className="d-block header" >
        <Col className="d-inline-flex justify-content-center ">
        <h1>Starships</h1>
        
        <Col className="d-inline-flex justify-content-center ">
        <h5 ><a href="https://swapi.dev/about">Powered by the Star Wars API</a></h5>
        </Col>
        </Col>
        <SearchBar setSearchTerm={setSearchTerm} />
      </Col>
      <Col>
      <StarshipTable starships={starships}/>
      </Col>
    </div>
  );
}

export default App;
