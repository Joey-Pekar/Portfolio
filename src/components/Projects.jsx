import React, { Component } from 'react';
import { Container, NavDropdown, Card, Tabs, Tab, Carousel } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faLink } from '@fortawesome/free-solid-svg-icons';
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

            <Carousel.Item key={img.id}>
                <img className="d-block w-100" src={img.dir} alt={img.alt} />
                <Carousel.Caption>
                    <p>{img.text}</p>
                </Carousel.Caption>
            </Carousel.Item>

        );

        let link = "";

        if (projFile.link != "") {

            link = ( <a href={projFile.link}><FontAwesomeIcon icon={faLink} /> Link</a>);

        }

        let imageTab = "";

        if (projFile.images.length != 0) {

            imageTab = (
                <Tab eventKey="images" title="Images">
                                <br />
                                <Carousel className="mx-auto" style={{width: "60%"}}>{images}</Carousel>
                            </Tab>
            );

        }

        return (
            <Container>
                <Card>
                    <Card.Header>
                        <h1>{projFile.name}</h1>
                        <a href={projFile.github}><FontAwesomeIcon icon={faGithub} /> Github</a> {link}
                    </Card.Header>
                    <Card.Body>
                        
                        <Tabs defaultActiveKey="desc" id="tabs">
                            <Tab eventKey="desc" title="Description">
                                <br />
                                {description}
                            </Tab>
                            {imageTab}
                            
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