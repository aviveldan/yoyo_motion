import React from 'react';
import { Jumbotron, Button, Navbar, Nav } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import yehonatan from '../images/yehonatan.jpg'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

function NavBar(props) {

    return (
        <Navbar className='border-bottom' bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-toggle' />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/"><Button variant="outline-success" onClick={()=>props.handleClick(null)}>דף הבית</Button></Link>
            <Link className="nav-link" to="/portfolio"><Button variant="outline-success" onClick={()=>props.handleClick(null)}>העבודות שלי</Button></Link>
            <Link className="nav-link" to="/contact"><Button variant="outline-success" onClick={()=>props.handleClick(null)}>צור קשר</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default NavBar;