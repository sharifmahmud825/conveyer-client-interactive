import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
              <Link to='/addservice' className='nav-link'>
                <Nav.Link href='#order'>Add Service</Nav.Link>
              </Link>
              <Link to='/contact' className='nav-link'>
                <Nav.Link href='#contact'>Contact</Nav.Link>
              </Link>
              {user?.email ? (
                <div>
                  <NavDropdown
                    title={
                      <img
                        src={user.photoURL}
                        alt=''
                        className='rounded-circle w-50'
                      />
                    }
                    id='basic-nav-dropdown'
                  >
                    <Navbar.Text>
                      <p className='text-center'>
                        Hello!! <br /> {user.displayName}
                      </p>
                    </Navbar.Text>
                    <NavDropdown.Item href='#action/3.1'>
                      My Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Manage Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      <button onClick={logOut} className='btn btn-danger ms-2'>
                        Log Out
                      </button>
                    </NavDropdown.Item>
                  </NavDropdown>
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
