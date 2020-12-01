import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "./List";

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   value: this.props.value,
    //   name: this.props.name,
    //   changed: this.props.changeHandler,
    // };
  }

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
