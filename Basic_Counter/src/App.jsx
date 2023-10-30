import { useState } from 'react'                  // hooks imported
import './App.css'

function App() {
  let [counter , setCounter] = useState(0)           // this is a hooks  
  const AddValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    } 
    
  }

  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="div" >
      <h1 className='head'> REACT COUNTER </h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick = {RemoveValue} id="rv"> Remove Value </button>
      <button onClick= {AddValue} id="av"> Add Value</button>
      {/* <p> footer: {counter} </p> */}

    </div>
    
  )
}

export default App




//        cd Basic_Counter
//          npm run dev 