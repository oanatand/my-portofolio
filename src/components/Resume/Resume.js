import React, { Component } from 'react';
import './Resume.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Resume extends Component {
    render() {
        return (
            <div className="container mt-3">
                <Row className="border-top-white">
                    <Col>
                        <h4 className="title">My Resume</h4>
                    </Col>
                </Row>

                <Row className="resume-grid" id="resume">
                    <Col>
                        <Row>
                            <Col className="col-2 pr-0">
                                <i className="fa fa-graduation-cap"></i>
                            </Col>
                            <Col className="pl-0">
                                <span>Mathematics and Informatics, Web Design</span>
                                <div className="text-danger">2010-2014<span> | Vasile Lucaciu College</span> </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col className="col-2 pr-0">
                                <i className="fa fa-graduation-cap"></i>
                            </Col>
                            <Col className="pl-0">
                                <span>Environmental Engineering</span>
                                <div className="text-danger">2015-2019<span> | Babes Bolyai University</span> </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="resume-grid">
                    <Col>
                        <Row>
                            <Col className="col-2 pr-0">
                                <i className="fa fa-graduation-cap"></i>
                            </Col>
                            <Col className="pl-0">
                                <span>Advanced Chemical Process Engineering</span>
                                <div className="text-danger">2019-2021<span> | Babes Bolyai University</span> </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col className="col-2 pr-0">
                                <i className="fa fa-graduation-cap"></i>
                            </Col>
                            <Col className="pl-0">
                                <span>Erasmus</span>
                                <div className="text-danger">Jan-Jun 2018<span> | Tallinn University - Estonia</span> </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="resume-grid">
                    <Col>
                        <Row>
                            <Col className="col-2 pr-0">
                                <i className="fa fa-graduation-cap"></i>
                            </Col>
                            <Col className="pl-0">
                                <span>Web Development (JavaScript)</span>
                                <div className="text-danger">2019 - 2020<span> | The Informal School of IT</span> </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col className="col-2 pr-0">
                                <i className="fa fa-briefcase"></i>
                            </Col>
                            <Col className="pl-0">
                                <span>Environmental Protection</span>
                                <div className="text-danger">2019 - 2020<span> | Robert Bosch</span> </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Resume;