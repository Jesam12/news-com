import { useState } from 'react'
import { Row, Col, Nav, Form, FormControl, Button, Dropdown, Navbar, Container} from "react-bootstrap";
import './App.css'
import NewsList from './Components/NewsList';

function App() {
  const [count, setCount] = useState(0)

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  }

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
                  <Dropdown.Item onClick={() => handleCategoryClick("world")}>World</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("business")}>Business</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("technology")}>Technology</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("sports")}>Sport</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("entertainment")}>Entertainment</Dropdown.Item>
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

      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className='flex-column'>
              <Nav.Link>World</Nav.Link>
              <Nav.Link>Business</Nav.Link>
              <Nav.Link>Technology</Nav.Link>
              <Nav.Link>Sports</Nav.Link>
              <Nav.Link>Entertainment</Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={9}>
           <NewsList category={category} searchTerm={searchTerm}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
