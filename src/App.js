import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import LeagueManagementInfo from './Components/Projects/projectInfoPages/LeagueManagement.js';
import TreasureHuntInfo from './Components/Projects/projectInfoPages/TreasureHunt.js';
import ContactsAppInfo from './Components/Projects/projectInfoPages/ContactsApp.js';
import BaseballProject from './Components/Projects/projectInfoPages/BaseballProject.js';
import HeroGame from './Components/Projects/projectInfoPages/HeroGame.js';
import RockPaperScissors from './Components/Projects/projectInfoPages/RockPaperScissors.js';
import SandwichShoppe from './Components/Projects/projectInfoPages/SandwichShoppe.js';
import CoffeeRoasters from './Components/Projects/projectInfoPages/CoffeeRoasters.js';
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
                <Route exact path='/projectInfoPages/RockPaperScissors'>
                    <RockPaperScissors />
                </Route>
                <Route exact path='/projectInfoPages/BaseballProject'>
                    <BaseballProject />
                </Route>
                <Route exact path='/projectInfoPages/SandwichShoppe'>
                    <SandwichShoppe />
                </Route>
                <Route exact path='/projectInfoPages/CoffeeRoasters'>
                    <CoffeeRoasters />
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