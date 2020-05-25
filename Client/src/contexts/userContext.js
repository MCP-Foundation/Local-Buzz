import React, { createContext, useState } from 'react'

 export const UserContext = createContext()
 export default function UserProvider({ children }){
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <UserContext.Provider value= {{ isLoggedIn , setIsLoggedIn }}>
      { children }
    </UserContext.Provider>
  )
}