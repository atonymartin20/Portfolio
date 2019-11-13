import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Components/Homepage';
// import Projects from './Components/Projects';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                {/* <Route path="/projects">
                    <Projects />
                </Route> */}
                <Route>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
