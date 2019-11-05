import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import ErrorPage from './Components/ErrorPage';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
            <Navbar />
        </div>
    );
}

export default App;
