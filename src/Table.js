import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Col, Table} from "react-bootstrap";
import axios from "axios";

import "./index.css";

const StarshipTable = (props) => {


  return (
      <Table variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
            <th>Hyperdrive Rating</th>
            <th>Cargo Capacity</th>
            <th>Cost in Credits</th>
            <th>Crew</th>
          </tr>
        </thead>
        <tbody>
        {props.starships.length > 0  ? (
          props.starships.map((starship) => (
          <React.Fragment>
          <tr>
            <td>{starship.name}</td>
            <td>{starship.model}</td>
            <td>{starship.starship_class}</td>
            <td>{starship.hyperdrive_rating}</td>
            <td>{starship.cargo_capacity}</td>   
            <td>{starship.cost_in_credits}</td>
            <td>{starship.crew}</td>
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
  );

}

export default StarshipTable