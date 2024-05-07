// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import ResultComponent from './component/ResultComponent';

function App() {
  const [page, setPage] = useState('Home');

  const setPageTo = (newPage) => {
    setPage(newPage);
  };

  const handlePlay_Button = () => {
    setPageTo('Quiz');
  };

  const handleQuit_Button = () => {
    setPageTo('Result');
  };

  return (
    <div className="App">
      {page === 'Home' && <HomeComponent onPlayClick={handlePlay_Button} />}
      {page === 'Quiz' && <QuizComponent onQuitClick={handleQuit_Button} />}
      {page === 'Result' && <ResultComponent />}
    </div>
  );
}

export default App;
