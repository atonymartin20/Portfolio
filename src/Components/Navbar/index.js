import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { runInThisContext } from "vm";

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        display: "flex",
        color: "white",
        width: "100%",
        boxShadow: "none",
        transition: "all 500ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        position: "fixed",
        height: 65,
        top: "0",
        padding: "0px 4%",
        fontSize: "2.5rem",
        backgroundColor: "transparent"
    },
    backgroundBlue: {
        backgroundColor: "#0E3386"
    },
    backgroundTransparent: {
        backgroundColor: "transparent"
    },
    closeButton: {
        cursor: "pointer",
        padding: 15,
        paddingLeft: 35,
        fontSize: "2rem"
    },
    logo: {
        fontFamily: "Rye, cursive",
        fontSize: "3.0rem",
        [theme.breakpoints.down(600)]: {
            margin: '0 auto',
        }
    }
});

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
        this.NavbarChangeColor = this.NavbarChangeColor.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.NavbarChangeColor);
    }

    NavbarChangeColor() {
        const { classes } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > 300) {
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

    handleDrawerToggle = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    handleClose = () => {
        this.setState({
            drawerOpen: false
        })
    }
    
    render() {
        const { classes } = this.props;

        return (
            <AppBar className={classes.appBar}>
                <Hidden smUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <h1 className={classes.logo}>Alex Martin</h1>
                {/* Add About Button */}
                {/* Add Projects Button */}
                {/* Add Contact Page */}
                {/* Green 5 */}
            </AppBar>
        );
    }
}

export default withStyles(styles)(Navbar);
