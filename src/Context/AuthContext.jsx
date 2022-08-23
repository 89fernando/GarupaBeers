import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(null)
  
  useEffect(() => {
      const isLogged = JSON.parse(localStorage.getItem('authenticated'))
      if (isLogged) {
          setAuthenticated(true)
      } else {
          setAuthenticated(false)
      }
  }, [])

  function doLogin() {
      localStorage.setItem('authenticated', true)
      setAuthenticated(true)
  }

  function doLogout() {
      localStorage.setItem('authenticated', false)
      setAuthenticated(false)
  }


  return (
    <AuthContext.Provider
        value={{ authenticated, setAuthenticated, doLogin, doLogout }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }