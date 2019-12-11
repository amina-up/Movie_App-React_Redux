import React, { Component } from "react";
import { FormControl, Navbar } from "react-bootstrap";
import StarRating from "./StarRating";

class NavBarSearching extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar className=" justify-content-between">
          <div className="starts"></div>
          <FormControl
            type="text"
            placeholder="Search..."
            className=" mr-sm-2"
            onChange={e => this.props.changeInput(e)}
          />
        </Navbar>
        <StarRating
          count={this.props.count}
          isClicked={true}
          changeRate={this.props.changeRate}
        />
      </div>
    );
  }
}

export default NavBarSearching;
