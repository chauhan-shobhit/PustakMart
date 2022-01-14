import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div>
<Form>
<Container>
  <Form.Group className="mb-3 pd-3  " controlId="exampleForm.ControlInput1">
    
    <Form.Control type="search" placeholder="search" />
  </Form.Group>
  </Container>
</Form>
</div>
        <Button variant="outline-success">Success</Button>{' '}
     
      
        </div>
    )
}

export default Header
