import React, { Component } from "react";

class Image extends Component {
  render() {
    const { liked, image, character } = this.props;

    return (
      <img
        className={liked ? "liked" : "notLiked"}
        src={image}
        alt={character}
      />
    );
  }
}

export default Image;
