import React, { Component } from "react";

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
import { editeMovie } from "../actions/actions";
class ModalEdite extends Component {
  state = {
    modal: false,

    movie: {
      id: this.props.id,
      name: this.props.name,
      rating: this.props.rating,
      src: this.props.src
    }
  };

  changeName = e => {
    this.setState({
      movie: {
        ...this.state.movie,
        [e.target.name]: e.target.value
      }
    });
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    return (
      <div>
        <div className="button">
          <div className="buttn">
            <Button color="warning" className="btn-add" onClick={this.toggle}>
              edit film
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
                  defaultValue={this.props.name}
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
                  defaultValue={this.props.src}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input
                  placeholder="Rating..."
                  name="rating"
                  onChange={e => this.changeName(e)}
                  defaultValue={this.props.rating}
                />
              </InputGroup>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="warning"
              onClick={() => {
                this.props.editeMovie(this.state.movie);
                this.toggle();
              }}
            >
              Save
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
const mapDispatch = { editeMovie };
const stateMapToProps = state => ({
  myFilm: state.films
});

export default connect(stateMapToProps, mapDispatch)(ModalEdite);
