import React, { Component } from "react";

class Filters extends Component {
  state = {};

  render() {
    const { sortSimpsons, searchSimpsonsInput, resetFilters } = this.props;
    return (
      <>
        <input type="text" onInput={searchSimpsonsInput} />
        <select onInput={sortSimpsons}>
          <option value=""></option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
        <button onClick={resetFilters}>Reset</button>
      </>
    );
  }
}

export default Filters;
