import React from 'react';
import './Service.css';

const Service = (props) => {
  const { id, name, description, img, cost } = props.service;
  return (
    <div>
      <div className='col'>
        <div className='card'>
          <img
            src={img}
            className='card-img-top img-fluid card-img'
            alt='...'
          />
          <div className='card-body'>
            <h3 className='card-title text-success'>{name}</h3>
            <p className='card-text'>{description}</p>
            <h4 className='card-text  my-3'>{cost} taka</h4>
            <button className='btn btn-success w-100 button'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
