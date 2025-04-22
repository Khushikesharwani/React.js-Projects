import React from 'react';
import questions from './Components/Questions';
import OneQuestion from './Components/data';

const App = ({ questions }) => {
  return (
    <>
      <div className="container">
        <h1>FAQ's</h1>
        <section className="info">
          {questions.map((question) => (
            <OneQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </>
  );
};

export default App;
