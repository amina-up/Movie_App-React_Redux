import React from "react";
import "./Card.css";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import StarRating from "../navBar/StarRating";
import ModalEdite from "../modalEdite/modalEdite";
import { deleteMovie } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CardMovie = props => {
  const { name, src, rating, id } = props.el;
  return (
    <div>
      <Card className="card">
        <CardBody>
          <CardTitle>
            <StarRating count={rating} isClicked={false} />
          </CardTitle>
        </CardBody>
        <img width="100%" src={src} alt="Card image cap" className="imgs" />
        <CardBody>
          <CardText>
            <h3 style={{ color: "#D68910 " }}>{name}</h3>
          </CardText>
        </CardBody>

        <div className="buttons">
          <ModalEdite name={name} src={src} rating={rating} id={id} />
          <Button color="danger" onClick={() => props.deleteMovie(id)}>
            Delete
          </Button>
          <Link to={`/Details/${id}`}>
            <Button>Trailer</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

const dispatchToMap = { deleteMovie };
export default connect(null, dispatchToMap)(CardMovie);
