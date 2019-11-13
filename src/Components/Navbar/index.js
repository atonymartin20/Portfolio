import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames'
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import { blue } from '@material-ui/core/colors';
import { withTheme } from '@material-ui/styles';

const styles = () => ({
    appBar: {
        display: "flex",
        color: 'white',
        width: "100%",
        boxShadow: "none",
        transition: "all 500ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "fixed",
        height: 65,
        top: "0",
        padding: '0px 4%',
        fontSize: '2.5rem',
    }, 
    backgroundBlue: {
        backgroundColor: '#0E3386',
    },
    backgroundTransparent: {
        backgroundColor: 'transparent',
    }

});

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
        // this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.NavbarChangeColor = this.NavbarChangeColor.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.NavbarChangeColor)
    }

    NavbarChangeColor() {
        const { classes } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop > 300) {
            document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes.backgroundTransparent);
          document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes.backgroundBlue);
        } else {
          document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes.backgroundBlue);
          document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes.backgroundTransparent);
        }
    }
    
//     <Header
//     brand="Material Kit PRO React"
//     links={<HeaderLinks dropdownHoverColor="info" />}
//     fixed
//     color="transparent"
//     changeColorOnScroll={{
//       height: 400,
//       color: "info"
//     }}
//   />
    render() {
        const { classes } = this.props;

        return (
            <AppBar className={classes.appBar + ' ' + classes.backgroundTransparent}>
                <h1>test</h1>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Navbar);