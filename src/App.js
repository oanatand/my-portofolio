import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            joke: {}
        };
    }

    componentDidMount() {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.hasOwnProperty("joke")) {
                        this.setState({
                            isLoaded: true,
                            joke: {
                                jokeText: result.joke
                            }
                        })
                    }
                    else {
                        this.setState({
                            isLoaded: true,
                            joke: {
                                setup: result.setup,
                                delivery: result.delivery
                            }
                        })
                    }
                },
                (error) => console.log(error)
            )
    }

    render() {
        const { isLoaded, joke } = this.state;
        if (isLoaded) {
            return (
                <>
                    <Header />
                    <HomePage joke={joke} />
                    <AboutMe />
                    <Resume />
                    <Projects />
                    <Contact />
                </>

            );
        }
        else {
            return <h2>Loading...</h2>;
        }
    }
}

export default App;