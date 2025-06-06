import React, { useState } from 'react';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? '-' : '+'}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Question;
