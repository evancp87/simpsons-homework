import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = {
    like: false,
  };

  onLikeToggle = () => {
    const { character } = this.props.item;
    const { updatedLikes } = this.props;
    console.log("Character:", character);
    console.log("update likes:", updatedLikes);

    updatedLikes(character);
    this.setState({
      like: !this.state.like,
    });
  };

  handleDelete = (char) => {
    this.props.onDeleteChar(char);
  };

  render() {
    const { character, quote, image, characterDirection } = this.props.item;
    const { like } = this.state;
    return (
      <div className="characterContainer">
        <Name
          character={character}
          like={like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={quote} characterDirection={characterDirection} />
        <Image image={image} like={like} />
        <Delete character={character} onDeleteChar={this.handleDelete} />
      </div>
    );
  }
}

export default Character;
