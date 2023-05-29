import React, { Component } from "react";

class Delete extends Component {
  render() {
    const { onDeleteChar, character } = this.props;

    return (
      <div>
        <button onClick={onDeleteChar}>Delete</button>
      </div>
    );
  }
}

export default Delete;
