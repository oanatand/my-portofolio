import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-scroll';
import "bootstrap/js/src/collapse.js";

class Header extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top" id="main-nav">
                    <div className="container">
                        <a href="home" className="home-button">Oana Tand</a>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="aboutme" className="nav-link" spy={true}
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>About Me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="resume" className="nav-link" spy={true}
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                        smooth={true}
                                        offset={-60}
                                        duration={500}>Resume</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="projects-container" className="nav-link" spy={true} id="projects-link"
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                        smooth={true}
                                        offset={-60}
                                        duration={500}>Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="contacts-container" className="nav-link" spy={true} id="contacts-link"
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse.show"
                                        smooth={true}
                                        offset={-590}
                                        duration={500}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header;