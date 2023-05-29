import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setSimpsonsInput,
  setSimpsonsSort,
  resetFiltersType,
} from "../store/actions/filtersTypes";

class Filters extends Component {
  state = {};

  searchSimpsonsInput = (e) => {
    console.log(e.target.value);
    // this.props.setSimpsonsInput()

    this.props.setSimpsonsInput(e);
  };

  sortSimpsons = (e) => {
    console.log(e.target.value);
    // this.props.setSimpsonsSort()
    this.props.setSimpsonsSort(e);
  };

  resetFilters = () => {
    // const { sortInput, searchInput, simpsons } = this.state;
    console.log("hi");

    this.props.resetFiltersType();
  };

  render() {
    // const { sortSimpsons, searchSimpsonsInput, resetFilters } = this.props;
    return (
      <>
        <input type="text" onInput={this.searchSimpsonsInput} />
        <select onInput={this.sortSimpsons}>
          <option value=""></option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
        <button onClick={this.resetFilters}>Reset</button>
      </>
    );
  }
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

export default connect(null, mapDispatchToProps)(Filters);
