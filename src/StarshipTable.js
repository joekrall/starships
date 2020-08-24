import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Table} from "react-bootstrap";
import axios from "axios";

import "./index.css";

const StarshipTable = (props) => {


  return (
    <div>
      <Table className="striped bordered hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Cargo Capacity</th>
            <th>Cost in Credits</th>
            <th>Crew</th>
            <th>Hyperdrive Rating</th>
          </tr>
        </thead>
        <tbody>
        {props.starships.length > 0  ? (
          props.starships.map((starship) => (
          <React.Fragment>
          <tr>
            <td>{starship.name}</td>
            <td>{starship.model}</td>
            <td>{starship.cargo_capacity}</td>   
            <td>{starship.cost_in_credits}</td>
            <td>{starship.crew}</td>
            <td>{starship.hyperdrive_rating}</td>
          </tr>
          </React.Fragment>
          ))      
          ) : (
            <tr>
              <td >Starships loading ...</td>
            </tr>
          )}
        </tbody>
      </ Table>
    </div>
  );

}

export default StarshipTable