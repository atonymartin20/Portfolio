import React from 'react';
import { NavbarDiv } from '../StyledComponents';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false
        };
        this.navbarColorChange = this.navbarColorChange.bind(this);
    }

    componentDidMount() {
        if (this.props.changecolor)
    }
    }
    render() {
        return (
            <NavbarDiv>
                <h1>test</h1>
            </NavbarDiv>
        )
    }
}

export default Navbar;