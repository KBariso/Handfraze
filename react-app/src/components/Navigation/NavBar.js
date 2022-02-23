
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
      <nav>
        <div className='navbar'>
          <div className='HandfrazeLogoContainer'>
            <NavLink to='/' exact={true} activeClassName='HandfrazeLogo'>
            <img className="HandfrazeLogo" src={logo}/>
            </NavLink>
          </div>
          <div className='LogoutButtonContainer'>
            <LogoutButton />
          </div>
        </div>
      </nav>
    )
  } else {
    sessionLinks = (
      <nav>
      <div className='navbar'>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
          <img className="HandfrazeLogo" src={logo}/>
          </NavLink>
        </div>
        <div className="SignupLogout" >
          {/* <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink> */}
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
