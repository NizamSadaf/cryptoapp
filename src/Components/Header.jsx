import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Styles/navbar.scss'
const Header = () => {
  return (
    <Navbar className='navbar' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Crypto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=' w-100 justify-content-center'>
            <Link to='/'>
              <Nav.Link href="#home" className=' text-uppercase p-3'>Home</Nav.Link>
            </Link>
            <Link to='/coins'>
              <Nav.Link href="#link" className=' text-uppercase p-3'>Coin List</Nav.Link>
            </Link>
            <Link to='/exchange'>
              <Nav.Link href="#link" className=' text-uppercase p-3'>Exchange</Nav.Link>
            </Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
