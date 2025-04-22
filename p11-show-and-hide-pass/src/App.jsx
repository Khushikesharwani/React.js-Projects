import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pwd, setpwd] = useState('');
  const[isPwd, setIsPwd] = useState(false)

  return (
    <>  
    <div className="container">
      <h3>Show And Hide Password with React</h3>
      <div className='pwd-container'>
        <input
         name="pwd"
         placeholder='Enter Password'
         type={isPwd ? 'text' : 'password'}
         value={pwd}
         onChange={(e) => setpwd(e.target.value)}
          />

          <button onClick={() => setIsPwd(prevState=> !prevState)} >
            {isPwd ? 'Hide Password' : 'Show Password'}
          </button>
      </div>
      </div>
    </>
  )
}

export default App
