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
        <p style={{ fontSize: '70px', fontWeight: 'bold' }}>
          THIS IS MY FIRST PROJECT.--- IYAPPAN's ReactApp.
        </p>
        <p>
          <br /> Modified on 4.50 to check CICD flow.
          <br />Refresh to get current Time & date : {getCurrentTimestamp()}
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
