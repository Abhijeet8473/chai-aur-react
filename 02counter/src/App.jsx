import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setcounter] = useState(15)
  // let [counter, remCounter] = useState()

  const addValue = () =>{ 
    if(counter < 20){
      setcounter(counter+1);
    }
    
  }

  const remValue = () =>{
    if(counter >= 1){
      setcounter(counter-1)
    }
    
  }
  return (
   <>
   <h1>hello this is abhijet</h1>
   <h2>Counter value : {counter}</h2>
   <button onClick={addValue}>Add Value</button>
   <br></br>
   <button onClick={remValue}>Decrease Value</button>
   </>
  )
}

export default App
