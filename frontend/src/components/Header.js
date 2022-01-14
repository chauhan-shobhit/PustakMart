import React , { useState }from 'react'
import { Navbar, Nav, Container, NavDropdown , Form, FormControl, Button , Row, Col} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap' 
import {useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

import { Route } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'



const divStyle = {

  width: '1500px',
  borderStyle: 'solid'  ,
  borderColor: 'grey'
};



const Header = () => {

  const dispatch = useDispatch()
  const userLogin =  useSelector( state => state.userLogin )
  const { userInfo }  =  userLogin

 const logoutHandler = () => {
    dispatch(logout())
  }

  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
        navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <header >
      <Navbar bg='light'  variant='primary' expand='lg' collapseOnSelect>
       <Container fluid>
    
          <LinkContainer to='/'>
            <Navbar.Brand >
                <img
                  src="http://localhost:3000/logo_transparent.png"
                  width="100"
                  height="100"
                  className=" align-top"
                  alt="PustakMart logo"
                />
            </Navbar.Brand>
          </LinkContainer>
      
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
       
          <Button type='submit' variant='outline-dark' size='sm'>
      <Nav.Link >
                <i className='fas fa-search'></i> 
              </Nav.Link>
        
      </Button>
          
          <Form onSubmit={submitHandler} style={divStyle} >
      <Form.Control 
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Books...'
        className='mr-sm-2'

        
        
      ></Form.Control>
      
    </Form>
    
     <Container style={{width: '14rem'}}>
          <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end" >
            <Nav className='mr-auto'>
            <LinkContainer to='/cart'  >
              <Nav.Link >
                <i className='fas fa-shopping-cart' style={{fontSize:'20px'}}></i> 
              </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>

                  
                  <LinkContainer to='profile' >
                    <NavDropdown.Item>
                      Profile
                    </NavDropdown.Item>
                  
                  </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>

                </NavDropdown>
              ):
              <LinkContainer to='/login' >
              <Nav.Link >
                <i className='fas fa-user' style={{fontSize:'20px'}}  ></i> 
              </Nav.Link>
              </LinkContainer>
              }
              
            </Nav>
          </Navbar.Collapse>
          </Container>
          
       
        </Container>
      </Navbar>
    </header>
  )
}

export default Header