import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <span>Pavithiran</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className='text-white'>ABOUT</Nav.Link>
            <Nav.Link href="#skill" className='text-white' >SKILLS</Nav.Link>
            <Nav.Link href="#project" className='text-white'>PROJECTS</Nav.Link>
            <Nav.Link href="#contact"className='text-white'>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
