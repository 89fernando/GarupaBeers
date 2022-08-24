import { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext";
import Logo from "../Assets/Images/beer-home.png";
import "../Assets/Styles/header.scss";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
  const navigate = useNavigate()
  const { doLogout } = useContext(AuthContext)

  return (
    <Fragment>
      <div className='header'>
        <div className='header-container'>
            <div className="logo-container">
                <img
                  src={Logo}
                  alt="logo-beer" />
            </div>
            <div className='super-title'>
              <a target="_blank" rel="noopener noreferrer" href="https://www.brewdog.com/uk">BREWDOG</a>
            </div>
            <ul>
              <ExitToAppIcon 
                className='exit-icon'
                onClick={() => {
                  doLogout()
                  navigate('/')
                }}
              />
            </ul>
        </div>
      </div>
    </Fragment>
  )
}
export default Header;