import React from 'react';
import Navbar from '../Navbar';
import { HomepageDiv } from '../StyledComponents';

class Homepage extends React.Component {
    render() {
        return (
            <HomepageDiv>
                <Navbar />
                <h1>lolz</h1>
            </HomepageDiv>
        )
    }
}

export default Homepage;