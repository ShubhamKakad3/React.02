import React, { useContext, useState } from 'react'         // 22
import UserContext from '../context/userContext'            // 23

function Profile() {                                         // 24
    const { user } = useContext(UserContext)                 // 25  get data 
    if (!user) return <div> please login</div>               // 26  in case there is no data
    return <div> welcome :{ user.username }</div>            // 27 
}

export default Profile
