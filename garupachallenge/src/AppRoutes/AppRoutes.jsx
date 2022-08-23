import { Routes, Route } from 'react-router-dom'
import LoginRoute from './LoginRoute'
import Login from "../Components/login/Login"

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<LoginRoute />}>
        <Route path="/" element={<Login />}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes;
