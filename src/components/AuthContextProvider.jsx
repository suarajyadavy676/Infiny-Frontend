import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

// create
export let AuthContext = createContext() 
function AuthContextProvider({children}) {
  let [token,setToken] = useState(null)
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        setToken(storedToken);
    }
}, []);
  return (
    <div>
      <AuthContext.Provider value={{token,setToken}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
