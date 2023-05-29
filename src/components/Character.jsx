import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCharacter } from "../store/actions/deleteTypes";

class Character extends Component {
  state = {
    like: false,
  };

  onLikeToggle = () => {
    const { character } = this.props.item;
    // const { updatedLikes } = this.props;
    // console.log("Character:", character);
    // console.log("update likes:", updatedLikes);

    // updatedLikes(character);
    this.setState({
      like: !this.state.like,
    });
  };

  handleDelete = () => {
    const { character } = this.props.item;
    const { onDeleteChar } = this.props;
    console.log(onDeleteChar);
    const charToDelete = onDeleteChar(character);
    this.props.deleteCharacter(charToDelete);
  };

  render() {
    const { character, quote, image, characterDirection, onDeleteChar } =
      this.props.item;
    const { like } = this.state;
    return (
      <div className="characterContainer">
        <Name
          character={character}
          like={like}
          onLikeToggle={this.onLikeToggle}
        />
        <Quote quote={quote} characterDirection={characterDirection} />
        <Image image={image} like={like} />

        <Delete character={character} onDeleteChar={this.handleDelete} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    simpsons: state.apiReducer.simpsons,
    deleteChar: state.deleteReducer.delete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteCharacter,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
