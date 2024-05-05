import React, { useState } from 'react'
import { createContext } from 'react'

// create
let AuthContext = createContext() 
function AuthContextProvider({children}) {
  let [token,setToken] = useState(null)
  return (
    <div>
      <AuthContext.Provider value={{token,setToken}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
