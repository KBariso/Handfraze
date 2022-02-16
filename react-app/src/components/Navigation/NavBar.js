
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user)

  let sessionLinks;

  if (user) {
    sessionLinks = (
      <nav>
        <div className='navbar'>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
            <h1>Handfraze</h1>
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
            <h1>Handfraze</h1>
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
