// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import "./ResultComponent.css";

class ResultComponent extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { totalQns, attemptedQns, correctAns, wrongAns } = this.props;

    return (
      <div>
        <h1>Result</h1>
        <div className="results_page">
          <b>You need more practice!</b>
          <p><b>Your score is 20%</b></p>
          <ul>
            <li>Total number of questions <span>{totalQns}15</span></li>
            <li>Number of attempted questions <span>{attemptedQns}9</span></li>
            <li>Number of correct answers <span>{correctAns}3</span></li>
            <li>Number of wrong answers <span>{wrongAns}6</span></li>
          </ul>
        </div>
        <div className="buttons">
          <button className="restart_quiz">Play Again</button>
          <button className="home">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;