
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
        <NavLink to='/' exact={true} activeClassName='HandfrazeLogo'>
          <img
            src={logo}
            className="website-logo"
            alt="website logo"
          />
        </NavLink>
                <div className="InfoChoices">
                    <div >
                        <NavLink to="/about" className="About"> About </NavLink>
                    </div>
                    <div className="ImportanceASL">
                        <NavLink to="/importance" className="Importance"> Importance </NavLink>
                    </div>
                    <div className="WhyLearn">
                        <NavLink to="/learn" className="Learn"> Learn </NavLink>
                    </div>
                </div>
        <LogoutButton />
        </div>
      </>
    )
  } else {
    sessionLinks = (
      <>
          <div className="SignupLogout" >
          <div className='SignUpFormModalContainer'>
            <SignupFormModal />
          </div>
          <div>
            <LoginFormModal />
          </div>

      </div>
      <nav>

        <div className="nav-bar">
        <NavLink to='/' exact={true} activeClassName='HandfrazeLogo'>
          <img
            src={logo}
            className="website-logo"
            alt="website logo"
          />
        </NavLink>
        <div className="AboutContainer">

                <div className="AboutInnerContainer">
                <div className="InfoChoices">
                    <div>
                    <NavLink to="/" className="arrow Home"> Home </NavLink>
                      </div>
                    <div >
                        <NavLink to="/about" className="arrow About"> About </NavLink>
                    </div>
                    <div className="ImportanceASL">
                        <NavLink to="/importance" className="arrow Importance"> Importance </NavLink>
                    </div>
                    <div className="WhyLearn">
                        <NavLink to="/learn" className="arrow Learn"> Learn </NavLink>
                    </div>
                    <div>
                    <NavLink to="/" className="arrow Contact"> Contact </NavLink>
                      </div>
                </div>
                </div>
            </div>
        {/* <div className="SignupLogout" >
          <div className='SignUpFormModalContainer'>
            <SignupFormModal />
          </div>
          <div>
            <LoginFormModal />
          </div>

      </div> */}
        </div>
  </nav>
      </>
    )
  }
  return (
    <>{sessionLinks}</>
  );
}

export default NavBar;
