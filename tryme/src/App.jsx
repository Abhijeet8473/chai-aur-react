import { useState, useEffect, useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [num, setNum] = useState()

  const [len, setLen] = useState(0)

  const stng = "!@#$%^&*"
  const generateNum = useCallback(() =>{
    let pass=""
    for(let i = 0;i<len;i++){
      let nu = Math.floor(Math.random() * stng.length )
      pass+=stng.charAt(nu)
    }
   
    setNum(pass)
  },[len])
  
  const handleInput= (e) =>{
    setLen(e.target.value)
  }
const use = useId()
  return (
    <>
      
      <input placeholder='give me number ' 
      onChange={handleInput}
      ></input>
      <h1 className='text-red-500' >The Number is : {num}</h1>
      <button 
      className='bg-blue-200 text-black rounded-2xl'
      onClick={generateNum}
      >Click</button>
      
    </>
  )
}

export default App
