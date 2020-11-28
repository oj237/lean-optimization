import React from 'react';
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarHeader() {
    return(
        <div>
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand href="/" className="font-weight-bold text-muted">
                        SOPELEC
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        <LinkContainer to="/logout">
                            <Nav.Link>Deconnecte</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    ) 
}