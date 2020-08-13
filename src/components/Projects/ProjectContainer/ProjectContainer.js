import React, { Component } from 'react';
import './ProjectContainer.css';
import { Button } from 'react-bootstrap';

class ProjectContainer extends Component {

    getCardSideFrontClassIndex() {
        return `card__side card__side--front-${this.props.classIndex}`
    }

    getCardSideBackClassIndex() {
        return `card__side card__side--back card__side--back-${this.props.classIndex}`
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className={this.getCardSideFrontClassIndex()}>
                        <div className="card__title">
                            <h4>{this.props.projectTitle}</h4>
                        </div>
                    </div>
                    <div className={this.getCardSideBackClassIndex()}>
                        <div className="app__description">
                            <p>{this.props.projectDescription}</p>
                            <Button className="mr-2 transparency">
                                <a href={this.props.projectGitHubUrl} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </Button>
                            <Button className="transparency">
                                <a href={this.props.projectGitHubPageUrl} target="_blank" rel="noopener noreferrer">
                                    LiveDemo
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectContainer;