import React from "react";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Container, Nav, Navbar } from 'react-bootstrap';


const AppLayout=()=>{
    return(
        <div style={{ backgroundColor: 'black' }}>
            <Navbar style={{ backgroundColor: 'black' }}>
            <Container fluid>
              <Navbar.Brand href="/">
                <img src="https://www.kocca.kr/trend/vol30/img/s11/img_1.jpg" width={100} alt="넷플릭스 로고" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px'}}>
                  <Link to="/"  style={{ color: 'white', marginRight: '20px',textDecoration:'none'  }}>Home</Link>
                  <Link to="/Movies"  style={{ color: 'white', textDecoration:'none' }}>Movies</Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
            </Navbar>
            <Outlet/>    
        </div>)
}


export default AppLayout;