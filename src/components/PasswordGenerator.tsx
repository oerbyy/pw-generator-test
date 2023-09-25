import React, {useState} from 'react';
import './PasswordGenerator.css';

import {GeneratorOptions, generatePassword} from '../helpers/commonHelper';
import PasswordDisplay from './PasswordDisplay';

function PasswordGenerator() {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(12);
  const [options, setOptions] = useState<GeneratorOptions>({
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const handleOptionsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name: keyof GeneratorOptions = e.target.name as keyof GeneratorOptions;

    const isTheLastChecked =
      options[name] === true &&
      Object.values(options).filter((el: boolean) => el === true).length <= 1;

    if (!isTheLastChecked) {
      setOptions((prev: GeneratorOptions) => ({
        ...options,
        [name]: !prev[name],
      }));
    }
  };

  const handleCopyClick = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(options, length);
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
              name="includeLowercase"
              checked={options['includeLowercase']}
              onChange={handleOptionsChange}
            />
            Include Lowercase
          </label>
        </div>
        <div className="password-options">
          <label>
            <input
              type="checkbox"
              name="includeUppercase"
              checked={options['includeUppercase']}
              onChange={handleOptionsChange}
            />
            Include Uppercase
          </label>
        </div>
        <div className="password-options">
          <label>
            <input
              type="checkbox"
              name="includeNumbers"
              checked={options['includeNumbers']}
              onChange={handleOptionsChange}
            />
            Include Numbers
          </label>
        </div>
        <div className="password-options">
          <label>
            <input
              type="checkbox"
              name="includeSymbols"
              checked={options['includeSymbols']}
              onChange={handleOptionsChange}
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
