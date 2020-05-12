import React, { Component } from 'react';
import { Container, NavDropdown, Card, Tabs, Tab } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
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
        let description = projFile.description.map((desc) => 
        
            <p key={desc.id}>{desc.text}</p>
        
        );

        let images = projFile.images.map((img) =>

            <Card key={img.id}>
                <Card.Img variant="top" src={img.dir} alt={img.alt}/>
                <Card.Body>
                    <Card.Text>{img.text}</Card.Text>
                </Card.Body>
            </Card>

        );


        return (
            <Container>
                <Card>
                    <Card.Header>
                        <h1>{projFile.name}</h1>
                        <a href={projFile.github}><FontAwesomeIcon icon={faGithub} /> Github</a>
                    </Card.Header>
                    <Card.Body>
                        <Tabs defaultActiveKey="desc" id="tabs">
                            <Tab eventKey="desc" title="Description">
                                <br />
                                {description}
                            </Tab>
                            <Tab eventKey="images" title="Images">
                                <br />
                                {images}
                            </Tab>
                            
                        </Tabs>
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