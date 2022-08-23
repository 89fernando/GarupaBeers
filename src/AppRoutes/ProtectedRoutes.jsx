import { Navigate, Outlet } from 'react-router-dom'
import { BeersProvider } from '../Context/BeersContext'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

const ProtectedRoutes = () => {
  const { authenticated } = useContext(AuthContext)

  if (authenticated === null) {
    return null
  }
  
  return (
    authenticated ? (
      <BeersProvider>
        <Outlet />
      </BeersProvider>
    ) : (
      <Navigate to="/" />
    )
  )
}

export default ProtectedRoutes;