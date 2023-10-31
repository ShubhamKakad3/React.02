import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState()
  const [charAllowed, setCharAllowed] = useState()
  const [password, setPassword] = useState()
  const passwordReference = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=[]{}|><..,,!`~?:;"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)+pass
    }


  setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyText = useCallback(() => {
    passwordReference.current?.select();                    // it will show u that text is copied
    // passwordReference.current?.setSelectionRange(0, 3);  // allow user to how much should be selected
    window.navigator.clipboard.writeText(password);
  },[password])



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  


  return (
    <div className='w-full h-full max-w-xl  max-auto shadow-md rounded-lg px-4 mx-auto mt-8 text-orange-500 bg-gray-900'>
      <h1 className='text-white text-center mb-2 text-3xl '>Password Generator</h1>
      <div className='flex shadow rounded-lg  overflow-hidden '>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3  text-xl'
          placeholder='Password'
          readOnly
          ref={passwordReference}
        />
        <button
          onClick={copyText}
          className='outline-none bg-blue-800  text-white  px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer my-3'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label > Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=> setNumberAllowed((prev)=> !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>setCharAllowed((prev)=> !prev)}
          />
          <label htmlFor="charInput">Charectors</label>
        </div>
      </div>
    </div>
    
  )
}

export default App
