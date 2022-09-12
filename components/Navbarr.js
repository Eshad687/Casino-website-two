import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Link from 'next/link'
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
        background: "#fff",

        boxShadow: "none",
        top: "-50",
        transition: "box-shadow  0.3s ease-in-out"
    }
    const style2 = {
        position: 'fixed',

        background: "#fff",
        boxShadow: "5px 5px 5px lightgrey",
        top: "0",
        transition: "box-shadow 0.3s ease-in-out"
    }
    return (
        <div>
            <Navbar style={navbar ? style2 : style1} fixed="top" collapseOnSelect expand="lg">
                <Container className="py-2">
                    <Navbar.Brand href="#home">GamblingCo.in</Navbar.Brand>
                    <Navbar.Toggle onClick={() => setNavbar(true)} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            {/* <Nav.Link className="ag" href="#features">Features</Nav.Link>
                            <Nav.Link className="ag" href="#pricing">Pricing</Nav.Link> */}
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


                            <Link className="ag p-0 m-0" href="/">
                                <a className='ag mx-2 p-0'>Home</a>
                            </Link>
                            <div className="dropdown mx-2">
                                <span className="ag p-0 ">Crypto Casinos <span className="arrow"></span></span>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div className="dropdown mx-2">
                                <span className="ag p-0 ">Bitcoin Casinos</span>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            {/* <div className="dropdown mx-2">
                                <span className="ag p-0 ">Etherium Casinos</span>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div> */}
                            {/* <div className="dropdown mx-2">
                                <span className="ag p-0 ">Litecoin Casinos</span>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div> */}
                            <div className="dropdown mx-2">
                                <span className="ag p-0 ">Casino Games </span>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                            <div className="dropdown mt-2 mt-md-0 mx-2 mx-md-5">
                                <span style={{ backgroundColor: "#35c193", color: "#fff", borderRadius: "5px", cursor: "pointer" }} className=" p-1">EN</span>

                                <span style={{ backgroundColor: "gray", color: "#fff", borderRadius: "5px", cursor: "pointer" }} className=" p-1 ms-2">ES</span>

                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;