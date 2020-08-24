import React, { useState, useEffect } from "react";
import StarshipTable from './StarshipTable';
import SearchBar from './SearchBar'
import Pages from './Pages'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [starships, setStarships] = useState([]);
  const [count, setCount] = useState(0);
  
  const search = (term) => {
    setSearchTerm(term);
  }

  useEffect(() => {

    fetch(`https://swapi.dev/api/starships/?page=${currentPage}&search=${searchTerm}`)
       .then(res => res.json())
      .then(data => {
        console.log(data.results)
        setCount(data.count)
        setStarships(data.results)
      })
      .catch(error => console.log(error))
  },  [currentPage]);


  return (
    <div className="App">
      
      <h1> Starships </h1>
      
      <Pages count={count} setCurrentPage={setCurrentPage} />
        <SearchBar search={search} />
        <StarshipTable starships={starships}/>
    </div>
  );
}

export default App;
