import React, { useState, useEffect } from "react";
import StarshipTable from './StarshipTable';
import SearchBar from './SearchBar'
import Pages from './Pages'
import * as Utils from './utilities'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  //const [currentPage, setCurrentPage] = useState(1);
  const [starships, setStarships] = useState([]);
  const [count, setCount] = useState(0);
  


  useEffect(() => {
    new Promise((resolve, reject) => {
      console.log("new promise")
      Utils.getStarships(`https://swapi.dev/api/starships/?search=${searchTerm}`, [], resolve, reject)
    })
      .then(response => {
        setCount(response.length);
        setStarships(response);
      })
  }, [searchTerm]);


  return (
    <div className="App">
      
      <h1> Starships </h1>
      
      {/* <Pages count={count} setCurrentPage={setCurrentPage} /> */}
        <SearchBar setSearchTerm={setSearchTerm} />
        <StarshipTable starships={starships}/>
    </div>
  );
}

export default App;
