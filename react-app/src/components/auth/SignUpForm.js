import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() =>{
    let errors =[];
    if (firstName.length <2 || firstName.length >30){
      errors.push('First name must be between 2 and 30 characters')
    }

    if (lastName.length <2 || firstName.length >30){
      errors.push('Last name must be between 2 and 30 characters')
    }
    if (!email.includes('@') || !email.includes('.') || !(email.includes('.com') || email.includes('.io') || email.includes('.net')))
    errors.push('Please sign up with a valid email.')
    if (email.length <2 || email.length >30){
      errors.push('Email must be between 2 and 30 characters.')
    }
    if (password.length <6 || password.length >20) {
      errors.push('Passowrd must be between 6 and 20 characters.')
    }
    if (password !== repeatPassword){
      errors.push('Password must match.')
    }
    setErrors(errors);
  }, [firstName, lastName, email, password, repeatPassword]);

  const onSignUp = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (errors.length  > 0) return
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(Object.values(data));
      }
    }
  };

  const updatefirstName = (e) => {
    setfirstName(e.target.value);
  };

  const updatelastName = (e) => {
    setlastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='login_banner'>
        <NavLink className='login_navlink' to={`/`}>iBook</NavLink>
      </div>

      <div className='login_container'>

        <form onSubmit={onSignUp} className='login_form'>

          <div className='signup_form_error'>
            {submitted && errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>

          <div>
            <div className='logintoibook'>Sign Up for iBook</div>
            <div style={{ fontWeight: "700" }} className='newtoibook'> Connect with great local bookstores</div>
          </div>


          <div >
            {/* <label  className='signup_label'>First Name</label> */}

            <input
              className='signup_name_input'
              type='text'
              name='firstName'
              onChange={updatefirstName}
              value={firstName}
              placeholder='First name'
              required={true}
            ></input>


            {/* <label className='signup_label'>Last Name</label> */}

            <input
              className='signup_name_input'
              type='text'
              name='lastName'
              onChange={updatelastName}
              value={lastName}
              placeholder='Last name'
              required={true}
            ></input>
          </div>

          <br></br>



          <div>
            {/* <label className='signup_label'>Email</label> */}
            <input
              className='loginform_input'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='Email'
              required={true}
            ></input>
          </div>
          <br></br>

          <div>
            {/* <label className='signup_label'>Password</label> */}
            <input
              className='loginform_input'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='Password'
              required={true}
            ></input>
          </div>
          <br></br>

          <div>
            {/* <label className='signup_label'>Repeat Password</label> */}
            <input
              className='loginform_input'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='Password'
            ></input>
          </div>
          <br></br>

          <button className='loginbtn' type='submit'>Sign Up</button>
          <div className='newtoibook_bottom'>Already on iBook &nbsp;
            <NavLink className='login_navlink_bottom' to={`/login`}>Log in</NavLink>
          </div>
        </form>
        <div>
          <img className='signup_image' src="https://images.unsplash.com/photo-1577058005446-f4380dcc4e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80 " alt='login image' />
        </div>
      </div>
    </>
  );

};

export default SignUpForm;
