import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MonthBox extends Component {
  static propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value || "N/A",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      value: props.value || "N/A",
    };
  }

  render() {
    return (
      <div className="box" onClick={this._handleClick}>
        <label>{this.state.value}</label>
      </div>
    );
  }

  _handleClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  };
}
