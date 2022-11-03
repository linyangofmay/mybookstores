
import React, { useEffect,useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import ProfileButton from './ProfileButton';
import logo from './logo.png';



function NavBar ({isLoaded}) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const OpenMenu =() =>{
    if (showMenu)  return;
    setShowMenu(true)
  }

  const forBusiness =()=>{
    if (sessionUser) {history.push('/bookstores/new')} else {
      alert(`Please sign in to list a bookstore`)
      history.push('/')
    };
   }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='profile_button_div'>
        <ProfileButton user={sessionUser} />

      </div>
    );
  } else {
    sessionLinks =(
      <>
        {/* <div className='loginsignup_container'> */}
        <NavLink to='/login' exact={true} activeClassName='active' className='navLink'>
            <div className='login-div'>Login</div>
        </NavLink>
        <NavLink to='/sign-up' exact={true} activeClassName='active' className='navLink'>
            <div className='signup-div'>Sign Up</div>
        </NavLink>

      </>
    );
  }

  return (
    <nav className='nav_container'>


          <NavLink exact to='/'   className='navLink'>
            <div className='twologo'>
            <div><img src={logo} className= 'booklogo'/></div>
            <div className='homepageword'> iBook </div>
            </div>
          </NavLink>


          {/* <NavLink to='/login' exact={true} activeClassName='active' className='navLink'>
            Login
          </NavLink>
          <NavLink to='/sign-up' exact={true} activeClassName='active' className='navLink'>
            Sign Up
          </NavLink>
          <LogoutButton /> */}
          <div className="profile_button_div">

          {isLoaded && sessionLinks}
        </div>


    </nav>
  );
}

export default NavBar;
