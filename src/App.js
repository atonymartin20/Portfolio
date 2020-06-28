import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import LeagueManagementInfo from './Components/Projects/projectInfoPages/LeagueManagement.js';
import TreasureHuntInfo from './Components/Projects/projectInfoPages/TreasureHunt.js';
import ContactsAppInfo from './Components/Projects/projectInfoPages/ContactsApp.js';
import BaseballProject from './Components/Projects/projectInfoPages/BaseballProject.js';
import HeroGame from './Components/Projects/projectInfoPages/HeroGame.js';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';

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
                <Route exact path='/projectInfoPages/LeagueManagement'>
                    <LeagueManagementInfo />
                </Route>
                <Route exact path='/projectInfoPages/TreasureHunt'>
                    <TreasureHuntInfo />
                </Route>
                <Route exact path='/projectInfoPages/ContactsApp'>
                    <ContactsAppInfo />
                </Route>
                <Route exact path='/projectInfoPages/BaseballProject'>
                    <BaseballProject />
                </Route>
                <Route exact path='/projectInfoPages/HeroGame'>
                    <HeroGame />
                </Route>
                <Route path="/about">
                    <AboutMe />
                </Route>
                <Route path="/contact">
                    <ContactMe />
                </Route>
                <Route>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

// 2. Finish About Me Page
// 3. Check styling of Navbar
// 4. Consider adding another solo project
// 5. Check responsiveness
// 6. Upload website