import React from 'react';

import './PasswordDisplay.css';

interface PasswordDisplayProps {
  password: string;
  onCopyClick: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({password, onCopyClick}) => {
  return (
    <div className="password-display">
      <input type="text" value={password} readOnly />
      <button onClick={onCopyClick} className="copy-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.5 0a.5.5 0 0 1 .5.5V2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5h6zM11 1H5a1 1 0 0 0-1 1v1h8V2a1 1 0 0 0-1-1zM3 3h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default PasswordDisplay;
