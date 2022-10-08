import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from "styled-components";
import styles from '../styles/navbar.module.css';
import Image from 'next/image';

const Navbarr = () => {

    const [navbar, setNavbar] = useState(false);
    const [lang, setLang] = useState("uk");
    const [langList, setLangList] = useState(["spain", "france"]);


    const handleLang = (e) =>{
        console.log(e.target.alt)
        let array = langList.filter(function(item) {
            return item !== e.target.alt
        })
        console.log(array)
        console.log(lang)
        array.push(lang)
        console.log(array)
        // setLangList(array.filter(function(item) {
        //     return item !== e.target.alt
        // }))
        setLangList(array);
        setLang(e.target.alt);

    }

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
                            {/* Language Button */}
                            <div className="mt-2 mt-md-0 mx-1 mx-md-1">
                                <div className={styles.dropdown}>
                                    <button className={styles.dropbtn}>
                                        <img
                                            src={`images/svg/${lang}.svg`}
                                            alt="Language - United Kingdom"
                                            width={30}
                                            height={30}
                                            />
                                            </button>
                                    <div className={styles.dropdownContent }>
                                        {/* <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a> */}
                                        <div onClick={handleLang}>
                                            <img
                                            src={`images/svg/${langList[0]}.svg`}
                                            alt={langList[0]}
                                            width={30}
                                            height={30}
                                            />
                                            </div>
                                        <div onClick={handleLang}>
                                            <img
                                            src={`images/svg/${langList[1]}.svg`}
                                            alt={langList[1]}
                                            width={30}
                                            height={30}
                                            />
                                            </div>
                                    </div>
                                </div>
                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;