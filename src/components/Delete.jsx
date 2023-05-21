import React, { Component } from "react";

class Delete extends Component {
  render() {
    const { onDeleteChar, character } = this.props;
    return (
      <div>
        <button onClick={() => onDeleteChar(character)}>Delete</button>
      </div>
    );
  }
}

export default Delete;
