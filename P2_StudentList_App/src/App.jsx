import React, { useState } from 'react';
import './App.css';
import Data from './components/data';
import List from './components/list';

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <div className="container">
      <h3>{people.length} Students</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
