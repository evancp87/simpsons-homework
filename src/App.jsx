import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = { likes: {} };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  }

  onDeleteChar = (character) => {
    const { simpsons } = this.state;
    const charToDelete = simpsons.findIndex(
      (char) => char.character === character
    );
    const filteredData = simpsons.filter(
      (char) => char !== simpsons[charToDelete]
    );

    this.setState({ simpsons: filteredData });
  };

  updatedLikes = (character) => {
    const { likes } = this.state;

    //  checks if character has been liked and doesn't update if so
    if (likes[character]) {
      return;
    }

    const newLikes = { ...likes };
    newLikes[character] = (likes[character] || 0) + 1;

    this.setState({ likes: newLikes });
  };

  render() {
    const { simpsons, likes } = this.state;

    const totalLikeCharacters = Object.values(likes).filter(
      (like) => like
    ).length;
    if (!simpsons) return <Loading />;
    return (
      <>
        <h1>Total no of liked chars: {totalLikeCharacters}</h1>
        <Simpsons
          simpsons={simpsons}
          onDeleteChar={this.onDeleteChar}
          likes={likes}
          updatedLikes={this.updatedLikes}
        />
      </>
    );
  }
}

export default App;
