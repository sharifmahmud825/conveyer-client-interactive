import React from 'react';
import './Service.css';

const Service = (props) => {
  const { id, name, description, img } = props.service;
  return (
    <div>
      <div class='col'>
        <div class='card'>
          <img
            src={img}
            class='card-img-top'
            alt='...'
            className='img-fluid card-img'
          />
          <div class='card-body'>
            <h5 class='card-title'>{name}</h5>
            <p class='card-text'>{description}</p>
            <button className='btn btn-success w-100 button'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
