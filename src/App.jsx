import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [count, setCount] = useState(0)

let counter = 5;

  const addValue = () =>{
    console.log("value added", Math.random());
  }

  return (
    <>
     <h1>02 Project</h1>
     <h2>counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button>Remove Value</button>
    </>
  )
}

export default App
