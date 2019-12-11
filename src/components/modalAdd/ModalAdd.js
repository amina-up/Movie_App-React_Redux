import React, { Component } from "react";

import "./Modal.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { connect } from "react-redux";
import { addMovie } from "../actions/actions";

class AddMovie extends Component {
  state = {
    movie: { name: "", year: "", rating: "", src: "" },
    modal: false
  };

  saveHanderl = () => {
    const movie = {
      key: Date.now(),
      rating: this.state.rating,
      name: this.state.name,
      year: this.state.year,
      src: this.state.src
    };
    this.props.addMovie(movie);
  };

  changeName = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <div className="button">
          <div className="buttn">
            <Button color="info m-5" className="btn-add" onClick={this.toggle}>
              Add a film
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Title Movie</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Title Movie..."
                  name="name"
                  onChange={e => this.changeName(e)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Cover Movie</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="URL..."
                  name="src"
                  onChange={e => this.changeName(e)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  placeholder="Rating..."
                  name="rating"
                  onChange={e => this.changeName(e)}
                />
              </InputGroup>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => {
                this.saveHanderl();
                this.toggle();
              }}
            >
              Add
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatch = { addMovie };

export default connect(null, mapDispatch)(AddMovie);
