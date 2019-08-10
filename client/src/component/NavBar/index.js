import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../NavBar/navbar.css"
import { Link } from "react-router-dom"

function NavBar() {
    return (

        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="https://github.com/ToriFortune/Project-3/blob/master/client/src/Images/dcoupsych2.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {"Docu Psych"}
            </Navbar.Brand>
            <Nav as="ul">
                <Nav.Item as="li">
                    <Link to="/providers">Provider Page</Link>

                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/patients">Patient List</Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Link to="/providers">Appointment Page</Link>

                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default NavBar;

// {/* <nav class="navbar bg-success">
// <h1>
//     <a href="index.html"><i class="fas fa-code"></i>Docu Psych</a>
// </h1>
// <ul>
//     <li><a href="../provider">Provider</a></li>
//     <li><a href="../patient">Patient</a></li>

// </ul>
// </nav> */}