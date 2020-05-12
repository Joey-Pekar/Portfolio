import React, { Component } from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {


    render() {

        return (
            <footer className="footer">
                <Container>
                    <span className="text-light">Developed using React and React-Bootstrap. Icons from Font Awesome.<br />
                    <a className="footer-link" href='https://github.com/Joey-Pekar/Portfolio'><FontAwesomeIcon icon={faGithub} /> View this project on Github!</a></span>
                </Container>
            </footer>
        );

    }


} export default Footer;