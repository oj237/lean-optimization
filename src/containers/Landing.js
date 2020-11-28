import React from "react";
import "./Landing.css";
import { Nav, Navbar } from "react-bootstrap"

export default function Landing() {
    return (
        <div className="Landing">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <Navbar.Brand className="font-weight-bold text-muted">
                    SOPELEC
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/logout">Access Au Distributeur </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="lander">
                <h1>Lean</h1>
                <p className="text-muted">
                    A lean Optimization App
                </p>
            </div>
        </div>
    );
}