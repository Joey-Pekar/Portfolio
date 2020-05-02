import React, { Component } from 'react';
import { Container, NavDropdown, Card } from 'react-bootstrap';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import projList from '../content/projects.json';

class ProjectDropdown extends Component {


    render() {

        const menu = projList.map((proj) =>

            <LinkContainer to={`/projects/${proj.url}`} key={proj.name}>
                <NavDropdown.Item>{proj.name}</NavDropdown.Item>
            </LinkContainer>

        );

        const title = (<span><FontAwesomeIcon icon={faFolder} /> Projects</span>);

        return (

            <NavDropdown title={title}>
                {menu}
            </NavDropdown>
        );

    }
} export { ProjectDropdown };

class ProjectPage extends Component {

    render() {

        let projFile = this.props.project;

        return (
            <Container>
                <Card>
                    <Card.Header>
                        <h1>{projFile.name}</h1>
                        <a href={projFile.github}><FontAwesomeIcon icon={faGithub} /> Github</a>
                    </Card.Header>
                    <Card.Body>
                        <p>{projFile.description}</p>
                    </Card.Body>
                </Card>
                

            </Container>
        );

    }


}

class Projects extends Component {

    render() {
        let projects = projList.map((proj) =>

            <Route key={proj.name} path={`/projects/${proj.url}`}>
                <ProjectPage project={proj} />
            </Route>

        );

        return (

            <Switch>
                {projects}
            </Switch>

        );

    }

} export default Projects;