
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import logo from './images/HandfrazeLogoEdit.jpg'
import './NavBar.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user)

  let sessionLinks;

  if (user) {
    sessionLinks = (
      <>
                <div className="nav-bar-container-light">
        <NavLink to='/home/about' exact={true} activeClassName='HandfrazeLogo'>
          <img
            src={logo}
            className="website-logo"
            alt="website logo"
          />
        </NavLink>
        <LogoutButton />
        </div>
      </>
    )
  } else {
    sessionLinks = (
      <nav>
                <div className="nav-bar-container-light">
        <NavLink to='/home/about' exact={true} activeClassName='HandfrazeLogo'>
          <img
            src={logo}
            className="website-logo"
            alt="website logo"
          />
        </NavLink>
        <div className="SignupLogout" >
          <div className='SignUpFormModalContainer'>
            <SignupFormModal />
          </div>
          <div>
            <LoginFormModal />
          </div>

        </div>
      </div>
  </nav>
    )
  }
  return (
    <>{sessionLinks}</>
  );
}

export default NavBar;
