import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = { likes: {} };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      this.setState({ simpsons: data });
    } catch (error) {
      console.log("The error is:", error);
    }
  }

  onDeleteChar = (character) => {
    const { simpsons, likes } = this.state;
    const charToDelete = simpsons.findIndex(
      (char) => char.character === character
    );
    const filteredData = simpsons.filter(
      (char) => char !== simpsons[charToDelete]
    );
    const updatedLikes = { ...likes };

    // handles updating the likes count when a character is deleted, checks to see if the like exist and then removes it and the character from state
    if (updatedLikes.hasOwnProperty(character)) {
      const { [character]: deletedCharacter, ...remainingLikes } = updatedLikes;
      this.setState({ simpsons: filteredData, likes: remainingLikes });
    } else {
      this.setState({ simpsons: filteredData });
    }
  };

  updatedLikes = (character) => {
    const { likes } = this.state;

    const newLikes = { ...likes };

    // handles toggling of count based on like/unlike state
    likes[character]
      ? (newLikes[character] = (likes[character] || 0) + 1)
      : (newLikes[character] = (likes[character] || 0) - 1);
    this.setState({ likes: newLikes });
  };

  searchSimpsonsInput = (e) => {
    console.log(e.target.value);

    this.setState({ searchInput: e.target.value });
  };

  sortSimpsons = (e) => {
    console.log(e.target.value);

    this.setState({ sortInput: e.target.value });
  };

  filteredSimpsons = () => {
    const { simpsons, likes, searchInput, sortInput } = this.state;

    let filteredList = [...simpsons];
    // if a search query is entered, filter the  state and return the character that equals the query
    if (searchInput) {
      filteredList = filteredList.filter((item) =>
        item.character.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (sortInput === "Asc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? 1 : -1
      );
    } else if (sortInput === "Desc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? -1 : 1
      );
    }

    return filteredList;
  };

  resetFilters = () => {
    const { sortInput, searchInput, simpsons } = this.state;
    console.log("hi");

    this.setState({ sortInput: "", searchInput: "" });
  };

  render() {
    const { simpsons, likes } = this.state;

    const totalLikeCharacters = Object.values(likes).filter(
      (like) => like
    ).length;
    if (!simpsons) return <Loading />;

    if (simpsons.length === 0)
      return <p>Doh! You ran out of Springfieldians!</p>;

    const filteredSimpsonsData = this.filteredSimpsons();
    return (
      <>
        <h1>Total no of liked chars: {totalLikeCharacters}</h1>
        <Simpsons
          simpsons={filteredSimpsonsData}
          onDeleteChar={this.onDeleteChar}
          likes={likes}
          updatedLikes={this.updatedLikes}
          searchSimpsonsInput={this.searchSimpsonsInput}
          sortSimpsons={this.sortSimpsons}
          resetFilters={this.resetFilters}
        />
      </>
    );
  }
}

export default App;
