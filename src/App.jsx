import React, { Component } from 'react';
import { Container, Card, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

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
                        <h1>Joey Pekar</h1>
                    </Card.Header>
                    <Card.Body>
                        <img className="focus float-left mr-5" src="https://raw.githubusercontent.com/Joey-Pekar/Portfolio/master/img/home/picture.png" alt="Joey Pekar" style={{ width: "15rem" }}></img>
                        <Container>
                            <p>I am a developer with a passion for Java, games and websites. Currently, I live in Akron, Ohio. I enjoy a variety of programming projects, from game development to creating websites such as this one. Here are some helpful buttons that can take you around the site.</p>

                        </Container>
                    </Card.Body>
                </Card>


            </Container>
        );

    }


}