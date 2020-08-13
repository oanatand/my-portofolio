import React, { Component } from 'react';
import './Projects.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProjectsData } from '../../utils/Constants';
import ProjectContainer from './ProjectContainer/ProjectContainer';

class Projects extends Component {

    renderTitle() {
        return (
            <Row className="projects-title pt-3">
                <Col className="pl-0 pr-0">
                    <h4 className="text-white bold-text">My Recent Work</h4>
                </Col>
            </Row>
        );
    }

    renderProjects() {
        let projectsDomData = [];
        for (let i = 0; i < ProjectsData.length / 2; i++) {
            projectsDomData.push(
                <Row key={i}>
                    <Col className="col-4">
                        <ProjectContainer projectTitle={ProjectsData[i].projectTitle}
                            projectDescription={ProjectsData[i].projectDescription}
                            projectGitHubUrl={ProjectsData[i].projectGitHubUrl}
                            projectGitHubPageUrl={ProjectsData[i].projectGitHubPageUrl}
                            classIndex={i + 1}>
                        </ProjectContainer>
                    </Col>
                    <Col className="col-4">
                        <ProjectContainer projectTitle={ProjectsData[i + 1].projectTitle}
                            projectDescription={ProjectsData[i + 1].projectDescription}
                            projectGitHubUrl={ProjectsData[i + 1].projectGitHubUrl}
                            projectGitHubPageUrl={ProjectsData[i + 1].projectGitHubPageUrl}
                            classIndex={i + 1}>
                        </ProjectContainer>
                    </Col>
                </Row>
            )
        }
        return projectsDomData;
    }

    render() {
        return (
            <>
                <div className="container pt-0" id="projects-container">
                    {this.renderTitle()}
                    {this.renderProjects()}
                </div>
            </>
        )
    }
}

export default Projects;