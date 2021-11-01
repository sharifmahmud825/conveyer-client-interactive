import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // POst Api from client side
    fetch(`http://localhost:5000/service`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <div className='container'>
        <div className='row my-4'>
          <div className='col-md-3'></div>
          <div className='col-md-6 p-3 border rounded'>
            <div>
              <div>
                <h1 className='text-center my-4'>Add Custom Service</h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className='form-control my-2'
                  {...register('name', { required: true })}
                  placeholder='Service Name'
                />
                <input
                  className='form-control my-2'
                  {...register('description', { required: true })}
                  placeholder='Description'
                />
                <input
                  className='form-control my-2'
                  type='number'
                  {...register('price', { required: true })}
                  placeholder='Price'
                />
                <input
                  className='form-control my-2'
                  type='file'
                  {...register('choose', { required: true })}
                />

                <input className='btn btn-warning my-2 w-100' type='submit' />
              </form>
            </div>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
