import React, { useState } from 'react';
import data from './Components/data'; // Ensure consistent naming

function App() {
  const [count, setCount] = useState(5);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Generate Lorem Ipsum</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 0)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
