import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" variant='dark' className="nav">
              <Container className="container">
                <Navbar.Brand href="index.html" className="nav-brand">
                  COLZY
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto content">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}

export default NavBar
