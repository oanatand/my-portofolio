import React, { Component } from 'react';
import './HomePage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends Component {

   render() {
      let jokeText;
      if (this.props.joke.hasOwnProperty("jokeText")) {
         jokeText = this.props.joke.jokeText;
      }
      else {
         jokeText = this.props.joke.setup + this.props.joke.delivery;
      }

      return (
         <>
            <header id="home-section">
               <div className="dark-overlay">
                  <div className="home-inner container">
                     <Row className="pb-0">
                        <Col className="pr-0 pl-0">
                           <div className="animated-title w-50">
                              <div className="text-top">
                                 <div>Hi, I’m Oana!</div>
                              </div>

                              <div className="text-bottom">
                                 <div>Future Web Developer.</div>
                              </div>
                           </div>
                        </Col>
                     </Row>

                     <Row className="mb-5">
                        <Col>
                           <div className="social-links-homepage">
                              <a href="https://www.linkedin.com/in/oana-maria-tand-301195185/"
                                 rel="noopener noreferrer"
                                 className="mr-4"
                                 target="_blank">
                                 <i className="fa fa-linkedin-square"></i>
                              </a>
                              <a href="https://github.com/oanatand?tab=repositories"
                                 rel="noopener noreferrer"
                                 target="_blank">
                                 <i className="fa fa-github-square"></i>
                              </a>
                           </div>
                        </Col>
                     </Row>

                     <Row>
                        <Col className="pl-0 pr-0">
                           <div className="w-50">
                              <h4 className="joke-title-heading">Quick Joke Of The Day</h4>
                              <p className="joke-text">{jokeText}</p>
                           </div>
                        </Col>
                     </Row>
                  </div>
               </div>
            </header>
         </>
      )
   }
}

export default HomePage;