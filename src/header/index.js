import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
      <Navbar bg="primary" expand="xs">
      <Navbar.Brand className='text-white'>
        <FontAwesomeIcon icon={faUtensils} style={{ fontSize: '2.5em' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='text-center'>
          <Link to='/' className='nav-btn text-white'>Home</Link>
          <Link to='/about' className='nav-btn text-white'>About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;