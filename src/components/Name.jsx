import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_LIKES } from "../store/actions/likesTypes";
class Name extends Component {
  render() {
    const { liked, character, id, dispatch } = this.props;

    return (
      <div>
        <h1>{character}</h1>
        <button onClick={() => dispatch({ type: SET_LIKES, payload: id })}>
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default connect()(Name);
