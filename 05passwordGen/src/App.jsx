import { useState } from 'react'
import { useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass, setPass] = useState("")

  // useRef hook : is used to create a mutable object which holds a .current property, it can be used to store a value that does not cause re-render when changed
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {               //useCallback is used to memoize (optimize) the function so that it doesn't get recreated on every render, basically it will only be rendered when its dependencies change
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxwyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
    }
    setPass(pass)


  }, [length, numberAllowed, charAllowed, setPass])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // focus the input element if it exists
    // passwordRef.current?.setSelectionRange(0,3)   // select a range from the given output box

    window.navigator.clipboard.writeText(pass)
  }, [pass])



  useEffect(() => {                                          //useEffect is used to perform side effects in function components, it runs after the render is committed to the screen
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>

      <div className='w-full max-w-md  not-[]:mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef} // attaching the ref to the input element
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>

    </>
  )
}

export default App
