import React, { Component } from "react";
import "./Card.css";
import CardMovie from "./Card.";
import AddMovie from "../modalAdd/ModalAdd";

const ListMovies = props => {
  return (
    <div>
      <div className="cards">
        {props.table.map((el, key) => (
          <CardMovie el={el} />
        ))}
      </div>
      <div className="add-movie"></div>
      <AddMovie />
    </div>
  );
};

export default ListMovies;
