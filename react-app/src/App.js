import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

import HomePage from './components/Bookstores/HomePage';
import BookstoreDetail from './components/Bookstores/BookstoreDetail';
import MyBookstore from './components/Bookstores/MyBookstore';
import BookstoreUpdate from './components/Bookstores/BookstoreUpdate';
import BookstoreCreate from './components/Bookstores/BookstoreCreate';

import MyReviews from './components/Reviews/MyReviews'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setIsLoaded(true);
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute> */}
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}

        <Route path='/' exact={true} >
           <NavBar isLoaded={isLoaded}/>
           <HomePage />
        </Route>

        <ProtectedRoute path='/bookstores/mybookstores' exact={true}>
          <NavBar isLoaded={isLoaded}/>
          <MyBookstore />
        </ProtectedRoute>

        <ProtectedRoute path='/myreviews' exact={true}>
          <NavBar isLoaded={isLoaded}/>
          <MyReviews />
        </ProtectedRoute>

        <ProtectedRoute path='/bookstores/new' exact={true}>
          <NavBar isLoaded={isLoaded}/>
          <BookstoreCreate />
        </ProtectedRoute>

        <ProtectedRoute path='/bookstores/:id/edit' exact={true} >
           <NavBar isLoaded={isLoaded}/>
           <BookstoreUpdate />
        </ProtectedRoute>

        <Route path='/bookstores/:id' exact={true} >
           <NavBar isLoaded={isLoaded}/>
           <BookstoreDetail />
        </Route>








      </Switch>
    </BrowserRouter>
  );
}

export default App;
