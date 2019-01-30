import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link className="navbar-brand" to="/">
                Logo
            </ Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Link className="nav-link" to="/species">
                    Sve vrste
                </ Link>
                <Link className="nav-link" to="/observation">
                    Observation
                </ Link>
                <Link className="nav-link" to="/observation">
                    Uputstvo
                </ Link>
                <Link className="nav-link" to="/observation">
                    O nama
                </ Link>
                <DropdownButton
                    alignRight
                    title="Bojan"
                    id="dropdown-menu-align-right"
                    variant="success"
                    >
                    <Link className="dropdown-item" to="/user">
                        Moj profil
                    </ Link>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Odjavi se</Dropdown.Item>
                </DropdownButton>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;