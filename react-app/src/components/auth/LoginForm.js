import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';

import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMOdal, setShowModal] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>

      <div className='login_banner'>
        <NavLink className='login_navlink' to={`/`}>iBook</NavLink>
      </div>


      <div className="login_container">
        <form onSubmit={onLogin} className='login_form'>

          <div className='login_form_error'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>

          <div>
            <div className='logintoibook'>Log in to iBook</div>
            <div className='newtoibook'>New to iBook ? &nbsp;
            <NavLink className='login_navlink_top' to={`/sign-up`}>Sign up</NavLink>
            </div>
          </div>

          <div>
            {/* <label htmlFor='email'>Email</label> */}
            <input
              className='loginform_input'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              required
            />
          </div>
          <div>
            {/* <label htmlFor='password'>Password</label> */}
            <input
              className='loginform_input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required
            />
          </div>
          <br></br>
          <div>
            <button type='submit' className='loginbtn'>Log in</button>
          </div>

          <br></br>
          <div>
            <button className='loginbtn' type='submit' onClick={() => { setEmail('demo@aa.io'); setPassword('password') }}>Demo User</button>
          </div>

          <div className='newtoibook_bottom'>New to iBook ? &nbsp;
            <NavLink className='login_navlink_bottom' to={`/sign-up`}>Sign up</NavLink>
          </div>

        </form>


        <div>
          <img className='login_image' src ="https://images.unsplash.com/photo-1577058005446-f4380dcc4e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80 " alt ='login image'/>
        </div>
      </div>
    </>
  );

};

export default LoginForm;
