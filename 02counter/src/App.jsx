// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    if (counter<20) {
      setCounter(counter + 1)

      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)         //So this is done to override the batch update problem of Fiber algortithm and henc we will see increaments of 4
    }
    
  }

  const decValue = () => {
    if(counter>0) {
      setCounter(counter - 1)
    }
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br />
      <button onClick={decValue}>Remove value</button>
    
    </>
  )
}

export default App

