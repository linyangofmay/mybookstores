
import React, { useEffect,useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import ProfileButton from './ProfileButton';
import logo from '../../context/apple-touch-icon.png';



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
        <NavLink to='/login' exact={true} activeClassName='active' className='navLink'>
            Login
        </NavLink>
        <NavLink to='/sign-up' exact={true} activeClassName='active' className='navLink'>
            Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className='nav_container'>


          <NavLink to='/' exact={true} activeClassName='active' className='navLink'>
            <img  className='logo-img' src={logo}/>
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
