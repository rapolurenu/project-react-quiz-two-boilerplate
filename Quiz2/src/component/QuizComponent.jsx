// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import qnsData from '../resources/quizQuestion.json'; 
import "./QuizComponent.css";

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQnIndex: 0, 
    };
  }

  handlePreviousButton = () => {
    this.setState(prevState => ({
      currentQnIndex: Math.max(prevState.currentQnIndex - 1, 0), 
    }));
  };

  handleNextButton = () => {
    // eslint-disable-next-line no-unused-vars
    const { currentQnIndex } = this.state;
    const { length } = qnsData;

    this.setState(prevState => ({
      currentQnIndex: Math.min(prevState.currentQnIndex + 1, length - 1), 
    }));
  };

  handleQuitButton = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/'); 
    }
  };

  render() {
    const { currentQnIndex } = this.state;
    const currentQn = qnsData[currentQnIndex];

    return (
      <div className="Quiz_page">
        <h1>Question</h1>
        <h2>{currentQn.question}</h2>
        <p className="qn_no">{currentQnIndex + 1} of {qnsData.length}</p>
        <ul className="options">
          <li>{currentQn.optionA}</li>
          <li>{currentQn.optionB}</li>
          <li>{currentQn.optionC}</li>
          <li>{currentQn.optionD}</li>
        </ul>
        <div className="buttons">
          <button onClick={this.handlePreviousButton}>Previous</button>
          <button onClick={this.handleNextButton}>Next</button>
          <button onClick={this.handleQuitButton}>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
