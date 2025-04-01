import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Alert from './Components/Alert';
import AlertList from './Components/AlertList'; // Ensure AlertList is an array of objects

const App = () => {
  return (
    <div className='wrapper'>
      {AlertList.map((alertItem) => (
        <Alert 
          key={alertItem.id} // Use a unique key
          type={alertItem.type} 
          title={alertItem.title} 
          id={alertItem.id}
        >
          {alertItem.message}
        </Alert>
      ))}
    </div>
  );
}

export default App;
