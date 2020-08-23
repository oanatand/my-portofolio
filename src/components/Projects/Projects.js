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
        let j=0;
        for (let i = 0; i < ProjectsData.length / 2; i++) {
            projectsDomData.push(
                <Row key={i}>
                    <Col className="col-4">
                        <ProjectContainer projectTitle={ProjectsData[j].projectTitle}
                            projectDescription={ProjectsData[j].projectDescription}
                            projectGitHubUrl={ProjectsData[j].projectGitHubUrl}
                            projectGitHubPageUrl={ProjectsData[j].projectGitHubPageUrl}
                            classIndex={i + 1}>
                        </ProjectContainer>
                    </Col>
                    <Col className="col-4">
                        <ProjectContainer projectTitle={ProjectsData[j + 1].projectTitle}
                            projectDescription={ProjectsData[j + 1].projectDescription}
                            projectGitHubUrl={ProjectsData[j + 1].projectGitHubUrl}
                            projectGitHubPageUrl={ProjectsData[j + 1].projectGitHubPageUrl}
                            classIndex={i + 1}>
                        </ProjectContainer>
                    </Col>
                </Row>
            )
            j=j+2;
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