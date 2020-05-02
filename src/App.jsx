import React, { Component } from 'react';
import { Container, Card, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Projects, { ProjectDropdown } from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {

    render() {
        return (
            <div>
                <HashRouter basename="/">
                    <Navbar variant="dark" className="topnav" expand="xl">
                        <Navbar.Brand>Joey Pekar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/">
                                    <Nav.Link><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                                </LinkContainer>
                                <ProjectDropdown />
                                <LinkContainer to="/contact">
                                    <Nav.Link><FontAwesomeIcon icon={faPhone} /> Contact</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />             
                    <Switch>
                        <Route path="/contact">
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/">
                            <Homepage />
                        </Route>
                    </Switch>

                </HashRouter>
                <Footer />
            </div>

        );
    }

}
export default App;

class Homepage extends Component {

    render() {

        return (
            <Container>
                <Card>
                    <Card.Header>
                        <h1>Portfolio</h1>
                        <a href='https://github.com/Joey-Pekar/Portfolio'><FontAwesomeIcon icon={faGithub} /> Github Repository</a>
                    </Card.Header>
                    <Card.Body>
                        <p></p>
                    </Card.Body>
                </Card>
                

            </Container>
        );

    }


}