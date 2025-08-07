import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="fixed h-screen" style={{ backgroundColor: color }}>
      <div className='flex flex-wrap fixed bottom-1 justify-center '>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-2 text-white rounded-full' style={{ backgroundColor: 'red' }}>Red</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-2 text-white rounded-full' style={{ backgroundColor: 'blue' }}>Blue</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-2 text-white rounded-full' style={{ backgroundColor: 'green' }}>Green</button>
      
        </div>
      </div>
    </div>
  </>
  )
}

export default App
