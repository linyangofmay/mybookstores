
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

  const forBusiness =()=>{
    if (sessionUser) {history.push('/bookstores/new')} else {
      alert(`Please sign in to list a bookstore`)
      history.push('/')
    };
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


          <NavLink to='/' exact={true} activeClassName='active' className='navLink'>
            Home
          </NavLink>


          <NavLink to='/login' exact={true} activeClassName='active' className='navLink'>
            Login
          </NavLink>


          <NavLink to='/sign-up' exact={true} activeClassName='active' className='navLink'>
            Sign Up
          </NavLink>





          <LogoutButton />


    </nav>
  );
}

export default NavBar;
