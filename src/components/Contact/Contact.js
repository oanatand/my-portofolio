import React, { Component } from 'react';
import './Contact.css';
import Row from 'react-bootstrap/Row';


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Row className="contact-me">
                        <div className="get-in-touch">
                            <h4 className="font-weight-bold"> Get in Touch </h4>
                            <p> <i className="fa fa-envelope"></i>oana.tand@gmail.com</p>
                            <p> <i className="fa fa-phone"></i>0748653192</p>
                        </div>

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
                    </Row>
                </div>
            </React.Fragment >
        )
    }
}

export default Contact;