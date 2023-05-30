import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_CHARACTER } from "../store/actions/deleteTypes";
class Delete extends Component {
  render() {
    const { character, dispatch } = this.props;
    console.log(character);
    return (
      <div>
        <button
          onClick={() =>
            dispatch({ type: DELETE_CHARACTER, payload: character })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Delete);
