import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error404 extends Component {
  state = {};
  render() {
    return (
      <>
        <p>Doh! Not found!</p>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default Error404;
