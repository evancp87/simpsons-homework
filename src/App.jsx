import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSimpsonsData } from "./store/actions/apiTypes";
import { Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Error404 from "./components/Error404";
import Nav from "./components/Nav";
import Screen from "./components/Screen";

class App extends Component {
  state = {
    showSplash: true,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );

      data.forEach((element, index) => {
        element.id = index + Math.random();
      });

      this.props.setSimpsonsData(data);
      setTimeout(() => {
        this.setState({ showSplash: false });
      }, 3000);
    } catch (error) {
      console.log("The error is:", error);
    }
  }

  render() {
    const { simpsons } = this.props;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0)
      return <p>Doh! You ran out of Springfieldians!</p>;

    let total = 0;

    simpsons.forEach((char) => {
      if (char.liked) total++;
    });

    return (
      <>
        {this.state.showSplash ? (
          <Screen />
        ) : (
          <>
            <h1>Total no of liked chars: {total} </h1>
            <Nav />
            <Routes>
              <Route path="/" element={<Simpsons />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </>
        )}
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
