
import React, { useEffect,useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../auth/SignUpForm';
import ProfileButton from './ProfileButton';



function NavBar () {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const OpenMenu =() =>{
    if (showMenu)  return;
    setShowMenu(true)
  }
  let sessionLinks;
  if (!sessionUser){
    sessionLinks =(
     <div className='login-signup-container'>

      <div className='nav-login'>
        <LoginForm />
      </div>

      <div className='nav-signup'>
        <SignUpForm />
      </div>

     </div>
    )
  } else {
    sessionLinks =(
      <ProfileButton />
    )
  }

  return (
    <nav className='nav_container'>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
