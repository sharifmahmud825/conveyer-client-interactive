import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';

const Contact = () => {
  return (
    <div>
      <NewsLetter></NewsLetter>
      <div className='bg-light my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 p-4'>
              <h5 className='text-success'>
                <i className='fas fa-phone-alt me-2'></i> Phone
              </h5>
              <h1 className=' my-3'>+000 123 456</h1>
              <h5 className='text-success'>
                <i className='fas fa-envelope me-2'></i> Email
              </h5>
              <h3 className=' my-3'>sharifmahmud825@gmail.com</h3>
              <h5 className='text-success'>
                <i class='fas fa-map-marker-alt me-2'></i>Address
              </h5>
              <h3 className=' my-3'>Sonadanga, Khulna</h3>
            </div>
            <div className='col-md-6'>
              <div className='d-flex justify-content-center'>
                <img
                  src='https://i.ibb.co/VQTDkrf/app-image.png'
                  alt=''
                  className='img-fluid w-50'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
