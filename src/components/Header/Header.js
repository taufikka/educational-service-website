import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "900"
    }
    return (
        <div>
            <Navbar bg="success" variant="dark">
                {/* site name and routing pages options */}
                <Container>
                    <Navbar.Brand to="/home" className='fw-bold'>Edumig</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink className='mx-2 text-decoration-none text-light' activeStyle={activeStyle} to='/home'>Home</NavLink>
                        <NavLink className='mx-2 text-decoration-none text-light' activeStyle={activeStyle} to='/service'>Courses</NavLink>
                        <NavLink className='mx-2 text-decoration-none text-light' activeStyle={activeStyle} to='/about'>About</NavLink>
                        <NavLink className='mx-2 text-decoration-none text-light' activeStyle={activeStyle} to='/contact'>Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;