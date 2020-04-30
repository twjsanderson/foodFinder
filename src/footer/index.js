import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
      <Navbar bg="primary" expand="lg">
          <Nav className="mx-auto">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2.5em' }} />
          </Nav>
      </Navbar>
    );
}

export default Footer;