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
                            <div className="text-white">My name is Oana Tand. I'am a future Web Developer, actively looking for a new life-changing opportunity.
                            I'm a motivated, teamwork-oriented and resposible person.
                                <div><i className="fa fa-laptop"></i>Front-end: JavaScript, HTML, CSS</div>
                                <div><i className="fa fa-laptop"></i>Libraries: ReactJS, Bootstrap</div>
                                <div><i className="fa fa-laptop"></i>Version control: Git, GitHub</div>
                            </div>
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