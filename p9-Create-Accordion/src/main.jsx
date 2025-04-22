import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import questions from './Components/data'; // Import data.jsx
import Question from './Components/Questions'; // Import Questions.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App questions={questions} QuestionComponent={Question} />
  </StrictMode>
);
