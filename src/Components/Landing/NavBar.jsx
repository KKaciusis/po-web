import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";
import fb from '../Icons/fb.ico';
import instagram from '../Icons/instagram.ico';
function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">Po Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Gallery</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                            <NavDropdown title="Meniu" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">About Me</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Contacts</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://www.facebook.com/pothepilot.kaciusis">
                                <img src={fb} alt="Facebook" />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="https://www.instagram.com/god_himself_po/">
                                <img src={instagram} alt="Facebook" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;