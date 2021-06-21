import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Akash';
  // const loading = true;
  const isLoggedin = true ;
  return (
    // <div> 
    // <React.Fragment>
      // <h1>hey  there !</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!isLoggedin && <p>Hello World </p>}
          {isLoggedin && <p> Hello {name}</p>}
          {/* {name} !! {new Date() . toDateString()} {isLoggedin ? name : 'World'} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    // </React.Fragment>
    // </div>
  );
}

export default App;
