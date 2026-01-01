import React from 'react';
import Calculator from './Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <p>A simple calculator built with React</p>
      </header>
      <main className="App-main">
        <Calculator />
      </main>
      <footer className="App-footer">
        <p>Built with React</p>
      </footer>
    </div>
  );
}

export default App;
