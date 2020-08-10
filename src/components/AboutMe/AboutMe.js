import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutMe.css'
import profilepic from '../../assets/images/profilepic.jpg';
import CV_PDF from '../../assets/documents/CV.pdf';

class AboutMe extends Component {
    render() {
        return (
            <div className="container" id="about-me-container">
                <Row id="aboutme">
                    <Col className="text-center">
                        <img className="about-me-img" src={profilepic} alt="profile-pic" />
                    </Col>
                    <Col>
                        <div className="short-resume">
                            <h4 className="font-weight-bold text-white">Who Am I</h4>
                            <p className="text-white">My name is Oana Tand. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href={CV_PDF} download="CV_Tand_Oana.pdf">
                                <button className="btn-download-cv" type="button">
                                    <i className="fa fa-download"></i> Download CV
                                </button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutMe;