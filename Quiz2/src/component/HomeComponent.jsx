// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomeComponent.css';

// eslint-disable-next-line react/prop-types
function HomeComponent({ onPlayClick }) {
  return (
    
    <div className="home_page">
      <p>Quiz App</p>
      <button onClick={onPlayClick}>Play</button>
    </div>
  );
}

export default HomeComponent;