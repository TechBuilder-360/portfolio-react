import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "./List";

export default class Main extends Component {

  render() {
    return (
      <div className="list-area">
        <List {...this.props}/>
      </div>
    );
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
  };
}
