import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">N Cart</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">About</NavItem>
                        <NavItem eventKey={2} href="#">Contact Us</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">My Cart
                            <Badge className="badge">1</Badge>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu