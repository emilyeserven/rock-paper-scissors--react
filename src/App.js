import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors!</h1>
      <div className="button-container">
        <div id="rock" className="option">
            <img src="/assets/rock.png" /><br />
            <span className="label">Rock</span>
        </div>
        <div id="paper" className="option">
            <img src="/assets/paper.png" /><br />
            <span className="label">Paper</span>
        </div>
        <div id="scissors" className="option">
            <img src="/assets/scissor.png" /><br />
            <span className="label">Scissor</span>
        </div>
      </div>
      <div className="winnings">
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
          <div className="scores winBox">
              <h2>Score</h2>
              <div className="userScore score-box">
                  User Score is now: <span id="userScore">0</span>
              </div>
              <div className="compScore score-box">
                  Computer Score is now: <span id="compScore">0</span>
              </div>
          </div>
      </div>
      <sub className="center"><a href="https://icons8.com/web-app/tag/rock-paper-scissor">Icons from icons8</a></sub>
    </div>
  );
}

export default App;
