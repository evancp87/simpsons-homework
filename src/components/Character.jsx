import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = {
    like: false,
  };

  render() {
    const { character, quote, image, characterDirection, id, liked } =
      this.props.item;

    return (
      <div className="characterContainer">
        <Name character={character} liked={liked} id={id} />
        <Quote quote={quote} characterDirection={characterDirection} />
        <Image image={image} liked={liked} />

        <Delete character={character} onDeleteChar={this.props.onDeleteChar} />
      </div>
    );
  }
}

export default Character;
