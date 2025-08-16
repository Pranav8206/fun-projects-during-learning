import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;
  const [counter2, setCounter2 ]= useState("p")
  let [counter, setCounter] = useState(10)

  const addValue =  () => {
  //   console.log(counter , Math.random())
  //   counter++;
  setCounter2("pranav");
    setCounter(++counter)
  }

  function removeValue() {
    if (counter > 0) {
       setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter</h1>

      <div>Counter is {counter} {counter2}</div>
      
      <br />
      <button onClick={addValue}>Add  value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>
    
    </>
  )
}

export default App
