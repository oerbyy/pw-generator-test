import React from 'react';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Oerbyy's Password Generator</h1>
      </div>

      <div className="content">
        <PasswordGenerator />
      </div>

      <div className="footer">&copy; 2023 Volodymyr Shchukin</div>
    </div>
  );
}

export default App;
