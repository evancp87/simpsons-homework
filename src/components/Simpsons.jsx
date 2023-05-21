import React, { Component } from "react";
import Character from "./Character";

class Simpsons extends Component {
  render() {
    const { simpsons, onDeleteChar, likes, updatedLikes } = this.props;

    // characterDirection === "Right" ? "Left" : "Right";
    return (
      <>
        {simpsons.map((item, index) => {
          return (
            <Character
              item={item}
              key={item.quote}
              onDeleteChar={onDeleteChar}
              likes={likes}
              updatedLikes={updatedLikes}
            />
          );
        })}
      </>
    );
  }
}

export default Simpsons;
