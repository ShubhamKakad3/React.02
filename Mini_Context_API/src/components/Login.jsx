import React, { useContext, useState } from 'react'          // 11
import UserContext from '../context/userContext'             // 12

function Login() {
    const [username,setUsername] = useState('')              // 14
    const [password, setPassword] = useState('')             // 15
    const {setUser} =useContext(UserContext)                  // 20 send data
    const HandleSubmte = (e) => {                             // 16
        e.preventDefault()
        setUser({username,password})                         // 21
     }
  return (
    <div>                                                     // 13
          <h2>Login</h2>
          <input
              type="text"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}    // 17
              placeholder=' username ' />
          <input
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}    // 18 
              type="text"
              placeholder=' password ' />
          <button onClick={HandleSubmte}>Submit</button>        // 19
    </div>
  )
}

export default Login
