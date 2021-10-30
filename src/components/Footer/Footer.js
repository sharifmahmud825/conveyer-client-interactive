import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-light '>
      <div className='container'>
        <div className='row py-4'>
          <div className='col-md-3'>
            <div>
              <img
                src='https://i.ibb.co/SR2zwYk/logo.png'
                alt='logo'
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-md-3'>
            <h4>About Company</h4>
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link href='/home'>Active</Nav.Link>
              <Nav.Link href='/about'>About Us</Nav.Link>
              <Nav.Link href='/order'>Order</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </div>
          <div className='col-md-3'>
            <h4>Information</h4>
            <Nav className='flex-column'>
              <Nav.Link href='#'>Terms & Condition</Nav.Link>
              <Nav.Link href='#'>Privacy Policy</Nav.Link>
            </Nav>
          </div>
          <div className='col-md-3'>
            <h4>Follow Us </h4>
            <span>
              <i className='fab fa-facebook fs-3 my-2 text-success'></i>
            </span>
            <span>
              <i className='fab fa-instagram ms-3 fs-3 my-2 text-success'></i>
            </span>
            <span>
              <i className='fab fa-twitter ms-3 fs-3 my-2 text-success'></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
