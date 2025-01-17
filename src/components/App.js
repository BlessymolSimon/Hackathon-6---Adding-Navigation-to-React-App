import React, { Component, useState } from "react";
import { BrowserRouter, Switch, Route, Link, useLocation } from "react-router-dom";
import '../styles/App.css';

class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <div id="main">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Switch>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="*">
                            <div>No match</div>
                        </Route>
                    </Switch>
                    <LocationDisplay />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

export const Home = class Home extends Component {
    render() {
        return (
            <div>
                You are home
            </div>
        )
    }
}
// export Home;
export const About = class About extends Component {
    render() {
        return (
            <div>
                You are on the about page
            </div>
        )
    }
}
// export About;
export const LocationDisplay = () => {
    let location = useLocation();
    return (
        <div data-testid="location-display">
            {location.pathname}
        </div>
    )

}