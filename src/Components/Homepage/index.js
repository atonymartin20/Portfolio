import React from 'react';
import Navbar from '../Navbar';
import { HomepageDiv, HomepageTopImg } from '../StyledComponents';

class Homepage extends React.Component {
    render() {
        return (
            <HomepageDiv>
                <Navbar />
                <HomepageTopImg>
                    <h1>Layer 1</h1>
                </HomepageTopImg>
                <h1>lolz</h1>
            </HomepageDiv>
        )
    }
}

export default Homepage;