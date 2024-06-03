import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from "../icons/nav-icon1.svg";
import navIcon2 from "../icons/nav-icon2.svg";
import navIcon3 from "../icons/nav-icon3.svg";


function Header() {
  return (
    <div style={{backgroundColor:"#262f38"}}>
      <Navbar  collapseOnSelect expand="lg"  >
      <Container >
        <Navbar.Brand href="/" style={{ color:"white"}} className='fw-bold'>Michel Saber</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects" className='text-white'>Projects</Nav.Link>
            <Nav.Link href="/about" className='text-white'>About</Nav.Link>
            
          </Nav>
          <Nav>
          <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header