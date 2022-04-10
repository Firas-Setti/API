import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div className='navbar'>
    <Navbar bg="dark" variant="dark">
    <Container className="container">
    <Navbar.Brand href="#home">The users list</Navbar.Brand>
    </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
