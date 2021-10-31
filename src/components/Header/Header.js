import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg='light' collapseOnSelect expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='https://i.ibb.co/SR2zwYk/logo.png'
              alt='logo'
              className='img-fluid w-25'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link to='/home' className='nav-link'>
                <Nav.Link href='#home'>Home</Nav.Link>
              </Link>
              <Link to='/about' className='nav-link'>
                <Nav.Link href='#about'>About Us</Nav.Link>
              </Link>
              <Link to='/orders' className='nav-link'>
                <Nav.Link href='#order'>Orders</Nav.Link>
              </Link>
              <Link to='/contact' className='nav-link'>
                <Nav.Link href='#contact'>Contact</Nav.Link>
              </Link>
              {user?.email ? (
                <div>
                  <Navbar.Text>
                    Hello!! <a href='#login'>{user.displayName}</a>
                  </Navbar.Text>

                  <button onClick={logOut} className='btn btn-danger ms-2'>
                    Log Out
                  </button>
                </div>
              ) : (
                <Link to='/login' className='nav-link'>
                  <button className='btn btn-primary'>Login</button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
