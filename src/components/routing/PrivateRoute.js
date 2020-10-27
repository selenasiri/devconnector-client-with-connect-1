import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../actions/auth'
import Spinner from '../layout/Spinner';

const PrivateRoute = (props) => {
  const  { isAuthenticated, loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // const Component = component;

  const Router = () => {
     render (
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          dispatch(auth)
        ) : (
          <Redirect to="/login" />
        )
    );
  }
},

export default PrivateRoute;
