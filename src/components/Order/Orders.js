import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './Order.css';

const Orders = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState({});
  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      const matchedData = orders.find((order) => order.id == id);
      setSingleOrder(matchedData);
    }
  }, [orders]);
  return (
    <div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card mb-3 singleOrder'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    src={singleOrder?.img}
                    className='img-fluid rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>{singleOrder?.name}</h5>
                    <p className='card-text'>{singleOrder?.description}</p>
                    <h5 className='card-text text-success'>
                      {singleOrder?.cost} taka
                    </h5>
                    <button className='btn btn-warning my-2'>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 border-3 shadow p-4 rounded-3'>
            <h2 className='mb-4 text-center text-success'>Book Your Order</h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className='form-control my-2'
                  {...register('name', { required: true })}
                  placeholder='Name'
                />
                <input
                  className='form-control my-2'
                  {...register('address', {})}
                  placeholder='Address'
                />
                <input
                  className='form-control my-2'
                  type='email'
                  {...register('email')}
                  placeholder='Email'
                />
                <input className='btn btn-warning my-2 w-100' type='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
