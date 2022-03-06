import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css"
import {Container, Nav, Navbar, } from "react-bootstrap";
const Navibar = () => {


    return (

        <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">SoccerStat</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link className={classes.navigate}  to="/posts">Лиги </Link></Nav.Link>
                        <Nav.Link><Link className={classes.navigate}  to="/teams">Команды</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    );
};

export default Navibar;