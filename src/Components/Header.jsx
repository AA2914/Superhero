import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar expand="lg" >
      <Container>
      <Navbar.Brand style={{fontFamily:' "Protest Guerrilla", sans-serif ',color:" rgb(158, 142, 70)",fontSize:"25px"}}>GARUDA</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mx-auto" variant="underline" defaultActiveKey="/home">
            <Nav.Link href="home"  style={{fontFamily:' "Donegal One", serif  ',color:' rgb(158, 142, 70)',fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link href="about"  style={{fontFamily:' "Donegal One", serif  ',color:' rgb(158, 142, 70)',fontSize:"20px"}}>About</Nav.Link>
            <Nav.Link href="grievanceForm"  style={{fontFamily:' "Donegal One", serif  ',color:'rgb(158, 142, 70)',fontSize:"20px"}}>Grievance</Nav.Link>

          </Nav>

          <Form className="d-flex">
            <Button style={{backgroundColor:"rgb(158, 142, 70)",border:"0px",fontWeight:'bold'}} className='ps-5 pe-5' href='contact'>Contact</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;