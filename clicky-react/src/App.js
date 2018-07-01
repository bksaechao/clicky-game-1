// This actually imports the React node modules
import React, { Component } from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import tiles from "./tiles.json";

class App extends Component {
  state = {
    tiles: tiles,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  // Click handler to set the clicked state to true
  handleSaveClick = (id) => {
    this.setState({clicked: true});
    console.log("Click Saved", id);
    this.handleCorrectClick();
  }

  // If correct click, update the score, top score and message in navbar
  handleCorrectClick = () => {
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: this.state.score+1, message: "Congrats! You win!", messageClass:"correct"})
    }else{
      this.setState({score: this.state.score+1, message: "You guessed correctly!", messageClass:"correct"})
    }
  }

  // Render the App component on the page
  render() {
    return (
      <div className="fluid-container">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />
        <div className="d-flex justify-content-center">
          {this.state.tiles.map(tile =>  
          <Card 
            key={tile.id}
            id={tile.id}
            name={tile.name}
            image={tile.image}
            clicked={tile.clicked}
            clickHandler = {this.handleSaveClick}
          />)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
