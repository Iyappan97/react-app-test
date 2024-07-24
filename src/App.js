import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS IS MY FIRST PROJECT.--- IYAPPAN's ReactApp.
              <br /> Modified at 4.21 AM to check CICD flow .
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
