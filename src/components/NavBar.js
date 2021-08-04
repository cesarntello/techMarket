import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar, 
  Container, 
  Nav, 
  NavDropdown,
  Image,
} from 'react-bootstrap';

import CartWidget from "./CartWidget";

export default function NavBar(){
    return(
      <> 
      
      <Image src="holder.js/100px250" fluid />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">techMarket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Componentes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Perifericos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">Software</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Medios de pago</Nav.Link>
            <Nav.Link href="#pricing">Quienes somos</Nav.Link>
            
          </Nav>
          <Nav>
          <CartWidget />
            <Nav.Link href="#deets">Iniciar sesión</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Ayuda        
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar></>
      
    );

}

