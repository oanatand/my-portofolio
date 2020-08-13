import React, { Component } from 'react';
import './Projects.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container pt-0" id="projects-container">
                    <Row className="projects-title pt-3">
                        <Col className="pl-0 pr-0">
                            <h4 className="text-white bold-text">My Recent Work</h4>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-4">
                            <div className="card">
                                <div className="card__side card__side--front-1">
                                    <div className="card__title card__title--1">
                                        <h4>Weather App</h4>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="app__description">
                                        <p>Weather App, which displays the weather by location or by typing the city.</p>
                                        <Button className="mr-2 transparency">
                                            <a href="https://github.com/oanatand/weather-app" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                            </a>
                                        </Button>
                                        <Button className="transparency">
                                            <a href="https://oanatand.github.io/weather-app/." target="_blank" rel="noopener noreferrer">
                                                LiveDemo
                                                                </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="col-4">
                            <div className="card">
                                <div className="card__side card__side--front-2">
                                    <div className="card__title card__title--2">
                                        <h4>Employees Agenda</h4>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="app__description">
                                        <p>Employees Agenda, a simple CRUD application with a search button.</p>
                                        <Button className="mr-2 transparency">
                                            <a href="https://github.com/oanatand/emplyees-agenda" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                                </a>
                                        </Button>
                                        <Button className="transparency">
                                            <a href="https://oanatand.github.io/emplyees-agenda/." target="_blank" rel="noopener noreferrer">
                                                LiveDemo
                                                                </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-4">
                            <div className="card">
                                <div className="card__side card__side--front-3">
                                    <div className="card__title card__title--3">
                                        <h4>Comment page</h4>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="app__description">
                                        <p>Comment page, where can be submited or deleted a comment.</p>
                                        <Button className="mr-2 transparency">
                                            <a href="https://github.com/oanatand/comments-page" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                                </a>
                                        </Button>
                                        <Button className="transparency">
                                            <a href="https://oanatand.github.io/comments-page/." target="_blank" rel="noopener noreferrer">
                                                LiveDemo
                                                                </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="col-4">
                            <div className="card">
                                <div className="card__side card__side--front-1">
                                    <div className="card__title card__title--1">
                                        <h4>Pig Game</h4>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="app__description">
                                        <p>Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold".
                                                        The first player to score 100 or more points wins.</p>
                                        <Button className="mr-2 transparency">
                                            <a href="https://github.com/oanatand/pig-game" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                                </a>
                                        </Button>
                                        <Button className="transparency">
                                            <a href="https://oanatand.github.io/pig-game/." target="_blank" rel="noopener noreferrer">
                                                LiveDemo
                                                                </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-4">
                            <div className="card">
                                <div className="card__side card__side--front-2">
                                    <div className="card__title card__title--2">
                                        <h4>The Mover Game</h4>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="app__description">
                                        <p>Every time the Player will hit an obstacle or the game container the life will decrease by one.</p>
                                        <Button className="mr-2 transparency">
                                            <a href="https://github.com/oanatand/the-mover-game" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                                </a>
                                        </Button>
                                        <Button className="transparency">
                                            <a href="https://oanatand.github.io/the-mover-game/." target="_blank" rel="noopener noreferrer">
                                                LiveDemo
                                                                </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="col-4">
                            <div className="card">
                                <div className="card__side card__side--front-3">
                                    <div className="card__title card__title--3">
                                        <h4>Tic-Tac-Toe</h4>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="app__description">
                                        <p>In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.</p>
                                        <Button className="mr-2 transparency">
                                            <a href="https://github.com/oanatand/tic-tac-toe" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                                </a>
                                        </Button>
                                        <Button className="transparency">
                                            <a href="https://oanatand.github.io/tic-tac-toe/." target="_blank" rel="noopener noreferrer">
                                                LiveDemo
                                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;