import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="button-container">
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
    </div>
  );
}

export default App;
