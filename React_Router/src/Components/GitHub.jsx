import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()             

    // u can fetch like this 1
    // const [data,setData] = useState([])
    // useEffect(() => {                   // USEEFFECT USED FOR API CALL
    //     fetch('https://api.github.com/users/ShubhamKakad3')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    
  return (
    <div className='text-centre m-4 bg-gray-600 text-white p-4 text-3xl' >
          GitHub Fllowers :{data.followers}
          <img src={data.avatar_url} alt="image not found " width={300} />
          {data.repos_url}                                                    // get whatever u want from api like this 
    </div>
  )
}


// also u can fetch like this 
export default GitHub
export const GitHubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/ShubhamKakad3')      
    return  response.json()
  }
