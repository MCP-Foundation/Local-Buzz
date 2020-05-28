import React, { createContext, useState, useEffect } from 'react'

export  const ProfileContext = createContext({})

export default function ProfileProvider ({ children }) {
  const [user, setUser] = useState(null)

    useEffect(() => {
    document.cookie
      ? fetch('/api/userObj')
        .then(res => {
          if (res.status === 200) return res.json()
          return null
        })
        .then(json => setUser(json)) : setUser(null)
  }, [setUser])
  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  )
}