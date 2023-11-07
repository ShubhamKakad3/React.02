import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>                        // 10       // also u can pass data/api here
        <h1>hellow user</h1>
        <Login />
        <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
