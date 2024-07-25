import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Function to get the current timestamp
  const getCurrentTimestamp = () => {
    const now = new Date();
    // Format as per locale, or use toISOString() for ISO format
    return now.toLocaleString(); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: '50px', fontWeight: 'bold' }}>
          THIS IS MY FIRST PROJECT.
            <br />------ IYAPPAN's ReactApp.
        </p>
        <p>
          <br /> CICD flow check. 
          <br /> Modified on 25/7/2024 04:55:00 pm
          <br /> Deployed on {getCurrentTimestamp()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevOps Engineer
        </a>
      </header>
    </div>
  );
}

export default App;
