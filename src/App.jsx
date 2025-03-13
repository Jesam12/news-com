import { useState } from 'react'
import { Row, Col, Nav, Form, FormControl, Button, Dropdown, Navbar, Container} from "react-bootstrap";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg='light' expand="lg" className='mb-4'>
        <Container>
          <Navbar.Brand href='/' className='fw-bold fs-4'>News App</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav"/>

          <Navbar.Collapse id='navbar-nav'>
            <Nav className='me-auto'>
              <Dropdown>
                <Dropdown.Toggle variant='outline-primary'>Categories</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>World</Dropdown.Item>
                  <Dropdown.Item>Business</Dropdown.Item>
                  <Dropdown.Item>Technology</Dropdown.Item>
                  <Dropdown.Item>Sport</Dropdown.Item>
                  <Dropdown.Item>Entertainment</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form className='d-flex'>
              <FormControl type="text" placeholder='search' className='me-2' name='search'/>

              <Button variant='outline-primary' type='submit'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default App
