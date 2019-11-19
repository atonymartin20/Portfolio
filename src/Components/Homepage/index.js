import React from 'react';
import Navbar from '../Navbar';
import { HomepageDiv, HomepageTopImg, HomepageHeader } from '../StyledComponents';

class Homepage extends React.Component {
    render() {
        return (
            <HomepageDiv>
                <Navbar />
                <HomepageTopImg>
                    <HomepageHeader>
                        <h1>Alex Martin</h1>
                        <h2>Front-end Developer</h2>

                    </HomepageHeader>
                </HomepageTopImg>
                <h1>lolz</h1>
            </HomepageDiv>
        )
    }
}

export default Homepage;