import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyApp from './component/MyApp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>Random Color Generator</h1>
        <MyApp />
      </main>
    </>
  );
}

export default App;
