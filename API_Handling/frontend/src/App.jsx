import { useState,useEffect } from "react"
import './App.css'
import axios from "axios"
function App() {
  const [search ,setSearch]= useState('')
  const [products, setProducts] = useState(0)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
  ;(async () => {                                             // ; is used before iife for safety ,assume previous work has done 
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get('/api/products?search ='+ search,{signal:controller.signal} )
      console.log(response.data);
      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled',error.message);
        return;
      }
      setError(true)
      setLoading(false)
    }
 })()                                                          // iife used here
// cleanup function 
    return () => {
      controller.abort()
    }
}, [search])

  
  // custom hook used ,either use above code or use custom hook
  // const[products,loading,error] = useCustom_React_Query("/api/products")

  // if (error) {
  //   return <h1>something went wrong</h1>         // either use this 
  // }

  // if (loading) {
  //   return<h1>Loading...</h1>                   // either use this 
  // }

  return (
    <>
      <h1> hi htere </h1> 
      <input type="text" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
      {loading && (<h1>Loading...</h1>)}                         // or this conditional rendering  
      {error && (<h1>something went wrong</h1>)}                 // or this
      <h2> number of product are :{products.length} </h2>
    </>
  )
}

export default App


// ______________________ CUSTOM QUERY HOOK ____________________________________________________________

const useCustom_React_Query = (urlPath) => {
   const [products, setProducts] = useState(0)
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
useEffect(() => {
  ;(async () => {                                             
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get(urlPath)
      console.log(response.data);
      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
 })()                                                        
}, [])
  return[products,loading,error] 
 }