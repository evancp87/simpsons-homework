import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSimpsonsData } from "./store/actions/apiTypes";
import { setLikes, updateLikes } from "./store/actions/likesTypes";

class App extends Component {
  // state = { likes: {} };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      this.props.setSimpsonsData(data);
    } catch (error) {
      console.log("The error is:", error);
    }
  }

  // onDeleteChar = (character) => {
  //   const { simpsons, likes } = this.state;
  //   const charToDelete = simpsons.findIndex(
  //     (char) => char.character === character
  //   );
  //   const filteredData = simpsons.filter(
  //     (char) => char !== simpsons[charToDelete]
  //   );
  //   const updatedLikes = { ...likes };

  //   // handles updating the likes count when a character is deleted, checks to see if the like exist and then removes it and the character from state
  //   if (updatedLikes.hasOwnProperty(character)) {
  //     const { [character]: deletedCharacter, ...remainingLikes } = updatedLikes;
  //     this.setState({ simpsons: filteredData, likes: remainingLikes });
  //   } else {
  //     this.setState({ simpsons: filteredData });
  //   }
  // };

  // updatedLikes = (character) => {
  //   const { likes } = this.state;

  //   const newLikes = { ...likes };

  //   // handles toggling of count based on like/unlike state
  //   likes[character]
  //     ? (newLikes[character] = (likes[character] || 0) + 1)
  //     : (newLikes[character] = (likes[character] || 0) - 1);
  //   this.setState({ likes: newLikes });
  // };

  render() {
    // const { simpsons, likes } = this.state;
    const { simpsons } = this.props;
    // const totalLikeCharacters = Object.values(likes).filter(
    //   (like) => like
    // ).length;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0)
      return <p>Doh! You ran out of Springfieldians!</p>;

    return (
      <>
        {/* <h1>Total no of liked chars: {totalLikeCharacters}</h1> */}
        <h1>Total no of liked chars: </h1>

        <Simpsons />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.apiReducer.simpsons,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setSimpsonsData,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
