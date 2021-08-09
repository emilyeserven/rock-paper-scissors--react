//import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
//import './App.css';
import React, { Component } from 'react';

class Button extends React.Component {
  render () {
    const imgPath = "/assets/" + this.props.name.toLowerCase() + ".png";
    return (
      <div id={this.props.name.toLowerCase()} className="option">
        <img src={imgPath} /><br />
        <span className="label">{this.props.name}</span>
      </div>
    )
  }
}

class ButtonContainer extends React.Component {
  render() {
    return (
      <div className="button-container">
        <Button name="Rock" />
        <Button name="Paper" />
        <Button name="Scissors" />
      </div>
    );
  };
};

class Results extends React.Component {
  render() {
    return (
      <div className="result winBox">
        <h2>Results</h2>
        <div className="pickContainer">
            <span className="pickText">You: </span><span id="userPick"></span>
        </div>
        <div className="pickContainer">
            <span className="pickText">Computer: </span><span id="compPick"></span>
        </div>
        <div className="clearfix"></div>
        <div className="resultContainer">
            <span id="overallResult">Click for a result!</span>
        </div>
      </div>
    );
  };
};

class Scores extends React.Component {
  render() {
    return (
      <div className="scores winBox">
        <h2>Score</h2>
        <div className="userScore score-box">
            User Score is now: <span id="userScore">0</span>
        </div>
        <div className="compScore score-box">
            Computer Score is now: <span id="compScore">0</span>
        </div>
      </div>
    );
  };
};

class Winnings extends React.Component {
  render() {
    return (
      <div className="winnings">
        <Results />
        <Scores />
      </div>
    );
  };
};

class Credit extends React.Component {
  render() {
    return (
      <sub className="center"><a href="https://icons8.com/web-app/tag/rock-paper-scissor">Icons from icons8</a></sub>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="game-container">
        <h1>Rock, Paper, Scissors!</h1>
        <ButtonContainer />
        <Winnings />
        <Credit />
      </div>
    );
  };
};


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
