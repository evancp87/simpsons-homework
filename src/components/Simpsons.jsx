import React, { Component } from "react";
import Character from "./Character";
import Controls from "./Controls";

class Simpsons extends Component {
  render() {
    const {
      simpsons,
      onDeleteChar,
      likes,
      updatedLikes,
      searchSimpsonsInput,
      sortSimpsons,
      resetFilters,
    } = this.props;

    // characterDirection === "Right" ? "Left" : "Right";
    return (
      <>
        <Controls
          searchSimpsonsInput={searchSimpsonsInput}
          sortSimpsons={sortSimpsons}
          resetFilters={resetFilters}
        />
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
