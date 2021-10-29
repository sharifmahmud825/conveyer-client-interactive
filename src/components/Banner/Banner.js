import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-md-6'>
          <h1 className='title-text'>
            We <span className='title'>Convey</span> your Desired products at
            your door
          </h1>
          <button className='btn btn-outline-success my-3'>Order Now</button>
        </div>
        <div className='col-md-6'>
          <div>
            <img
              src='https://i.ibb.co/DVnsmt6/hero.jpg'
              alt='banner'
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
