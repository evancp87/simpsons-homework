import React, { Component } from "react";

class Quote extends Component {
  render() {
    const { characterDirection } = this.props;

    const direction = characterDirection === "Left";

    return <p className={direction && "left-text"}>{this.props.quote}</p>;
  }
}

export default Quote;
