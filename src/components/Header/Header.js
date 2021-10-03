import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Edumig</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className='mx-2 text-decoration-none' activeStyle={activeStyle} to='/home'>Home</NavLink>
                        <NavLink className='mx-2 text-decoration-none' activeStyle={activeStyle} to='/about'>About Us</NavLink>
                        <NavLink className='mx-2 text-decoration-none' activeStyle={activeStyle} to='/service'>Courses</NavLink>
                        <NavLink className='mx-2 text-decoration-none' activeStyle={activeStyle} to='/contact'>Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;