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

    this.props.setSimpsonsInput(e);
  };

  sortSimpsons = (e) => {
    console.log(e.target.value);
    this.props.setSimpsonsSort(e);
  };

  resetFilters = () => {
    this.props.resetFiltersType();
  };

  render() {
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
