import React, { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)

 const passwordGenerator =  useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  if (numAllowed) str += "0123456789"
  if (charAllowed) str += "!@#$%^&*(){}+_=-~`?,.<>"
  
  for(let i = 1; i< length ; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)

 }, [length, numAllowed, charAllowed, setPassword])

const copyPasswordToClipBoard =useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
   window.navigator.clipboard.writeText(password)
}, [password])


 useEffect(() => {
  passwordGenerator()
 }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className= 'w-full max-w-lg mx-auto shadow-md rounded-lg px-6 py-6 my-14 text-black border border-blue-600' >
      <h1 className='text-blue-500 text-center my-3
      font-mono text-2xl '>Password Generator</h1>
      <div className='flex  
      overflow-hidden mb-4  '>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 rounded-full border border-blue-500'
        placeholder='Password'
        readOnly
        ref= {passwordRef}
        />

        <button onClick={copyPasswordToClipBoard} 
        className='outline-none rounded-full bg-blue-500 text-white px-5 py-2 shrink-0 ml-2
         transition-transform duration-200 hover:bg-blue-600 hover:scale-10
         active:bg-blue-900 active:scale-95 '
        >Copy</button>

      </div>
      <div className='flex text-xl gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label> length: {length}</label>
        </div>

      </div>
      <div className='flex  gap-x-8 text-xl mt-5'>
      <div className='flex items-center gap-x-1  '>
          <input type="checkbox"
          defaultChecked= {numAllowed}
          id='numInput'
          onChange= {() => 
            {setNumAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 '>
          <input type="checkbox"
          defaultChecked = {charAllowed}
          id='numInput'
          onChange={() => 
            {setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>

        </div>
      </div>

    </div>
    </>
  )
}

export default App
     
