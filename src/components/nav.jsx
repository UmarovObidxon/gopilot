import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react'
import "../css/nav.css"
import { Link,Outlet } from 'react-router-dom';
export default function nav(props) {
  return (
   
    <Navbar className=' d-flex z-5 fixed-top' bg="light" expand="lg">
        
             <Container fluid  className='navbarbasic ps-2  d-flex justify-content-between '>
        <div className=" col-xl-5 col-md-4  brand d-flex justify-content-start ms-5  ">
<Nav.Link href="/"><img className='' src={props.data.imgg } alt="" /></Nav.Link>
      
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id=" basic-navbar-nav  " className=''>
       <Nav className="navbars  col-xl-10 ms-5  text-center ">
          <Nav.Link className='navlink text-dark' href="/solutions">{props.data.LInk1}</Nav.Link>
            <Nav.Link className='navlink text-dark' href="/pricing">{props.data.LInk2}</Nav.Link>
            <Nav.Link className='navlink text-dark' href="/studies">{props.data.LInk3}</Nav.Link>
            <Nav.Link className='navlink text-dark'  href="/blog">{props.data.LInk4}</Nav.Link>
            <Nav.Link className='navlink text-dark' href="/about">{props.data.LInk5}</Nav.Link>
          <Button className='navbuttoon1 btn ' variant="warning">{props.data.button1}</Button>
            <Button className='navbuttoon2  btn ' variant="outline-dark">{props.data.button2}</Button>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
      <Outlet/>
    </Navbar>
  
  );
}







