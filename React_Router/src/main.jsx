import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import GitHub, {GitHubInfoLoader } from './Components/GitHub.jsx'


// routes 1 way  only syntax difference 
// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element:<Home/>
//     },
//     {
//       path: "about",
//       element:<About/>
//     },
//     {
//       path: 'contact',
//       element:<Contact/>
//     }
//   ]
// }])                                                             
         

// routes 2 way 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={ <Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route
         loader={GitHubInfoLoader}
         path='github'
         element={<GitHub />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
