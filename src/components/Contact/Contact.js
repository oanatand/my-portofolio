import React, { Component } from 'react';
import './Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container" id="contacts-container">
                    <Row className="contact-me">
                        <Col className="pl-0 pr-0">
                            <h4 className="font-weight-bold"> Get in Touch </h4>
                        </Col>
                    </Row>

                    <Row id="get-in-touch-content">
                        <Col className="pl-0 pr-0 text-white">
                            <p> <i className="fa fa-envelope"></i> oana.tand@gmail.com</p>
                            <p> <i className="fa fa-phone"></i> 0748653192</p>
                        </Col>

                        <Col>
                            <div className="social-links-contact">
                                <a href="https://www.linkedin.com/in/oana-maria-tand-301195185/"
                                    className="mr-4"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://github.com/oanatand?tab=repositories"
                                    rel="noopener noreferrer"
                                    className="mr-4"
                                    target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                <a href="https://www.facebook.com/oana.tand/"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment >
        )
    }
}

export default Contact;