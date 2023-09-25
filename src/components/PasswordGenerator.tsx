import React, {useState, useEffect} from 'react';
import './PasswordGenerator.css';

import {generatePassword} from '../helpers/commonHelper';
import PasswordDisplay from './PasswordDisplay';

function PasswordGenerator() {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(12);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const handleCopyClick = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      {includeLowercase, includeUppercase, includeNumbers, includeSymbols},
      length
    );
    setPassword(newPassword);
  };

  return (
    <div className="centered-container">
      <div className="password-generator">
        <div className="h-centered">
          <h1>Password Generator</h1>
        </div>

        <PasswordDisplay password={password} onCopyClick={handleCopyClick} />

        <div className="password-options">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min={4}
            max={24}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <br />

        <div className="password-options">
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase
          </label>
        </div>
        <div className="password-options">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase
          </label>
        </div>
        <div className="password-options">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
        </div>
        <div className="password-options">
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>

        <br />
        <div className="h-centered">
          <button onClick={handleGeneratePassword}>GENERATE PASSWORD</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
