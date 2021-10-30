import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.JSON')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className='text-center text-success my-4'>Services</h1>
      <div className='container'>
        <div class='row row-cols-1 row-cols-md-3 g-4 my-4'>
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
