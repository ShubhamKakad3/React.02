import React, { useState } from "react";                          // 4
import UserContext from "./userContext";                          // 5 
const UserContextProvider = ({ children }) => {                   // 6 
    const [user,setUser]= useState(null)                          // 8
    return (
        <UserContext.Provider value={{user , setUser}} >          // 7           // pass data/api here
            {children}
        </UserContext.Provider>

)
    
}
export default UserContextProvider                                // 9