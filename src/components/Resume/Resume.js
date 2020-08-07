import React, { Component } from 'react';
import './Resume.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Resume extends Component {
    render() {
        return (
            <div className="container">
                <Row className="border-top-white">
                    <h4 className="text-white font-weight-bold">My Resume</h4>
                </Row>

                <Row className="resume-grid" id="resume">
                    <Col>
                        <i className="fa fa-graduation-cap">
                            <span>Mathematics and Informatics, Web Design</span> </i>
                        <div className="resume-date">2010-2014<span> | Vasile Lucaciu College</span> </div>
                    </Col>

                    <Col>
                        <i className="fa fa-graduation-cap">
                            <span>Environmental Engineering</span> </i>
                        <div className="resume-date">2015-2019<span> | Babes Bolyai University</span> </div>
                    </Col>
                </Row>

                <Row className="resume-grid">
                    <Col>
                        <i className="fa fa-graduation-cap">
                            <span>Advanced Chemical Process Engineering</span> </i>
                        <div className="resume-date">2019-2021<span> | Babes Bolyai University</span> </div>
                    </Col>

                    <Col>
                        <i className="fa fa-graduation-cap">
                            <span>Erasmus</span> </i>
                        <div className="resume-date">Jan-Jun 2018<span> | Tallinn University - Estonia</span> </div>
                    </Col>
                </Row>

                <Row className="resume-grid">
                    <Col>
                        <i className="fa fa-graduation-cap">
                            <span>Web Development (JavaScript)</span> </i>
                        <div className="resume-date">2019 - 2020<span> | The Informal School of IT</span> </div>
                    </Col>

                    <Col>
                        <i className="fa fa-briefcase">
                            <span>Environmental Protection</span> </i>
                        <div className="resume-date">2019 - 2020<span> | Robert Bosch</span> </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Resume;