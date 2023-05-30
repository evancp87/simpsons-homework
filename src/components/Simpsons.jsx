import React, { Component } from "react";
import Character from "./Character";
import Controls from "./Controls";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

    return filteredList;
  };

  render() {
    const filteredSimpsonsData = this.filteredSimpsons();

    const { resetFilters, searchInput, sortInput } = this.props;

    return (
      <>
        <Controls
          searchInput={searchInput}
          sortInput={sortInput}
          resetFilters={resetFilters}
        />
        {filteredSimpsonsData.length === 0 && <p>No results found, dude</p>}
        {filteredSimpsonsData.map((item, index) => {
          return <Character item={item} key={item.id} />;
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  const { sortInput, searchInput } = state.filtersReducer;

  return {
    sortInput,
    searchInput,
    simpsons: state.apiReducer.simpsons,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setSimpsonsInput,
      setSimpsonsSort,
      resetFiltersType,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Simpsons);
