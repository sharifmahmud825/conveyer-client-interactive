import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/home';
  const history = useHistory();

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        //   const user = result.user;
        history.push(redirect_uri);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.email);
      });
  };
  return (
    <div className='d-flex justify-content-center align-items-center m-5'>
      <button onClick={handleGoogleLogin} className='btn btn-warning'>
        <i className='fab fa-google me-2'></i> Sign In
      </button>
    </div>
  );
};

export default Login;
