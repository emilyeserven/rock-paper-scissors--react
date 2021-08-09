import React, { Component } from 'react';

class Buttons extends React.Component {
    render() {
        return (
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
        );
    }
}

export default Buttons;
