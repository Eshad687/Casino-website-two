import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from "styled-components";
const Navbarr = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground);
    }

    const style1 = {
        position: 'fixed',
        background: 'transparent',
        transition: 'background 0.5s'
    }
    const style2 = {
        position: 'fixed',
        background: "linear-gradient(to right, #d31027, #ea384d)",
        transition: 'background 0.5s'
    }
    return (
        <div>
            <Navbar style={navbar ? style2 : style1} fixed="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">GamblingCo.in</Navbar.Brand>
                    <Navbar.Toggle onClick={() => setNavbar(true)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="ag" href="#features">Features</Nav.Link>
                            <Nav.Link className="ag" href="#pricing">Pricing</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>
                        <div className="dropdown">
                            <button className="dropbtn ag">Dropdown</button>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <Nav>
                            <Nav.Link className="ag" href="#deets">More deets</Nav.Link>
                            <Nav.Link className="ag" eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;