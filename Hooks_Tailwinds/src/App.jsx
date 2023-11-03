import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let MyObj = {
    name: "shubham",
    age:24
  }
  let myArr = [1, 2, 3, 4]
  let customProp = " ooooooooooooooooh my prop in lorem "
  

  return (
    <>
      <h1 className='bg-green-400 text-white padding-4 rounded-xl mb-4' >test</h1>
       <Card username="shubhamk" any ={ myArr }  btnText="Click Me"/>
       <Card username="hi" btnText="Visit Me"  />
       <Card username="must " btnText="isit Me"  custom={customProp} />
    </>
  )
}

export default App

//   cd Hooks_Tailwinds         npm run dev