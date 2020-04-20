import React from 'react';
import './App.css';
import api from './api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Api Results</h1>
        {api.get().name}
      </header>
    </div>
  );
}

export default App;
