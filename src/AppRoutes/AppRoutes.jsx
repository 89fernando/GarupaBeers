import { Routes, Route } from 'react-router-dom';
import LoginRoute from './LoginRoute';
import Login from "../Components/login/Login";
import ProtectedRoutes from './ProtectedRoutes';
import Beers from '../Components/beers/Beers';

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<LoginRoute />}>
        <Route path="/" element={<Login />}/>
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/allbeers" element={<Beers />}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes;