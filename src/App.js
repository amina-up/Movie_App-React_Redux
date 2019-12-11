import React, { Component } from "react";
import "./App.css";
import ListMovies from "./components/listMovie/ListMovie";
import NavbarSearch from "./components/navBar/NavBarSearching";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./components/details/Details";
import { connect } from "react-redux";

class App extends Component {
  state = {
    userInput: "",
    count: 0
  };
  changeRate = rate => {
    this.setState({
      count: rate
    });
  };

  changeInput = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <NavbarSearch
          changeInput={this.changeInput}
          changeRate={this.changeRate}
          count={this.state.count}
        />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                // <ListMovies
                //   table={this.props.table.filter(
                //     el =>
                //       el.name
                //         .toLowerCase()
                //         .includes(this.state.userInput.toLowerCase()) &&
                //       el.rating >= this.state.count
                //   )}
                // />
                <ListMovies
                  table={this.props.table.filter(
                    el =>
                      el.name
                        .toLowerCase()
                        .includes(this.state.userInput.toLowerCase()) &&
                      el.rating >= this.state.count
                  )}
                />
              )}
            />

            <Route exact path="/Details/:id" component={Details} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapToStateToProps = state => ({
  table: state.films
});

export default connect(mapToStateToProps)(App);
