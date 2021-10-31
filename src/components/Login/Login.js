import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    console.log('clicked');
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
