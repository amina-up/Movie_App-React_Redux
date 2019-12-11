import React from "react";
import { connect } from "react-redux";
import "./details.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const Details = props => {
  const [movie] = props.films.filter(el => el.id == props.match.params.id);
  console.log(movie);

  return (
    <div>
      <h1 style={{ color: "white" }}>{movie.name}</h1>

      <iframe src={movie.trailer} className="iframe"></iframe>
      <Link to="/">
        {" "}
        <Button>Back</Button>
      </Link>
    </div>
  );
};
const mapToState = state => ({
  films: state.films
});
export default connect(mapToState)(Details);
