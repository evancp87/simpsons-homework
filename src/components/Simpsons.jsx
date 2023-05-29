import React, { Component } from "react";
import Character from "./Character";
import Controls from "./Controls";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCharacter } from "../store/actions/deleteTypes";
import {
  setSimpsonsInput,
  setSimpsonsSort,
  resetFiltersType,
} from "../store/actions/filtersTypes";

class Simpsons extends Component {
  filteredSimpsons = () => {
    const {
      simpsons,
      likes,
      searchInput,
      sortInput,
      deleteChar,
      deletedCharacters,
    } = this.props;
    let filteredList = [...simpsons];
    // if a search query is entered, filter the  state and return the character that is in the query
    if (searchInput) {
      filteredList = filteredList.filter((item) =>
        item.character.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    // sorting alphabetically ascending or descending
    if (sortInput === "Asc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? 1 : -1
      );
    } else if (sortInput === "Desc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.character > numTwo.character ? -1 : 1
      );
    }

    // attempt to rerender filteredlist based on whether a character has been deleted
    // if (deleteChar && deleteChar.length > 0) {
    //   filteredList = [...deleteChar];
    // }
    // another attempt to conditionally rerender when character deleted- currently deletes evrything else but character clicked
    if (deleteChar && deleteChar.length > 0) {
      filteredList = filteredList.filter(
        (item) =>
          !deleteChar.some((deleted) => deleted.character === item.character)
      );
    }

    return filteredList;
  };

  onDeleteChar = (character) => {
    const { simpsons, likes } = this.props;
    const charToDelete = simpsons.findIndex(
      (char) => char.character === character
    );
    const filteredData = simpsons.filter(
      (char) => char !== simpsons[charToDelete]
    );
    // const updatedLikes = { ...likes };

    // handles updating the likes count when a character is deleted, checks to see if the like exist and then removes it and the character from state
    // if (updatedLikes.hasOwnProperty(character)) {
    //   const { [character]: deletedCharacter, ...remainingLikes } = updatedLikes;
    //   this.setState({ simpsons: filteredData, likes: remainingLikes });
    // } else {
    //   this.setState({ simpsons: filteredData });
    // }
    // this.props.deleteCharacter(filteredData);
    this.props.deleteCharacter(filteredData);
  };

  render() {
    const filteredSimpsonsData = this.filteredSimpsons();

    const {
      // onDeleteChar,
      resetFilters,
      searchInput,
      sortInput,
    } = this.props;

    return (
      <>
        <Controls
          searchInput={searchInput}
          sortInput={sortInput}
          resetFilters={resetFilters}
        />
        {filteredSimpsonsData.map((item, index) => {
          return (
            <Character
              item={item}
              key={item.quote}
              onDeleteChar={this.onDeleteChar}

              // likes={likes}
              // updatedLikes={updatedLikes}
            />
          );
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    sortInput: state.filtersReducer.sortInput,
    searchInput: state.filtersReducer.searchInput,
    deleteChar: state.deleteReducer.delete,
    simpsons: state.apiReducer.simpsons,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setSimpsonsInput,
      setSimpsonsSort,
      resetFiltersType,
      deleteCharacter,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Simpsons);
