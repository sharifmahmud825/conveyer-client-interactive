import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h1 className='text-center'> About Us</h1>
      <hr />
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <img
            src='https://i.ibb.co/g4ffyQD/about-us-banner.jpg'
            alt=''
            className='img-fluid'
          />
        </div>
        <div>
          <h2 className='text-center my-4 text-success'>
            We pride ourselves on delivering reliable services to our clients
            every time.
          </h2>
          <h6 className='text-center mb-5 mt-4'>
            Conveyer is Bangladesh’s most trusted on-demand last mile logistics
            network offering tech-enabled one stop delivery solutions. Since its
            inception in 2014, our vision has been to become the operating
            system for e-commerce in Bangladesh, through a combination of
            world-class infrastructure, logistics operations of the highest
            quality and cutting-edge technology capabilities. We take care of
            order fulfillment, collection, transport, tracking and delivery of
            parcels. We are the first in Bangladesh to have created a unique
            network with home delivery and Store Pickup & Return services which
            enhances customer experience and rationalizes costs.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
