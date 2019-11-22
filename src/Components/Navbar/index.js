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
        padding: 15,
        paddingLeft: 35,
    },
    closeIconStyling: {
        width: '25px',
        height: '25px',
        cursor: "pointer",
    },
    closeIconToolbar: {
        height: 65,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    drawer: {
        [theme.breakpoints.up(710)]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    drawerList: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        flexDirection: "column",
    },
    drawerPaper: {
        width: '100%',
        backgroundColor: '#E2E2E2',
        color: 'black',
        [theme.breakpoints.up(710)]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    hide710: {
        [theme.breakpoints.down(710)]: {
            display: 'none'
        }
    },
    list: {
        display: 'flex',
        padding: '0px',
        margin: '0px',
        listStyle: 'none',
        [theme.breakpoints.up("sm")]: {
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center",
            WebkitBoxOrient: "horizontal",
            WebkitBoxDirection: "normal",
            MsFlexDirection: "row",
            flexDirection: "row"
        },
        [theme.breakpoints.down(710)]: {
            flexDirection: "column",
        },
    },
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        marginLeft: "15px",
        [theme.breakpoints.down(710)]: {
            marginLeft: '0px',
            paddingLeft: '5px',
            width: '100%',
            borderBottom: '1px solid #C2C2C2',
            borderRight: '1px solid #C2C2C2',
            backgroundColor: '#DDDDDD',
            "& ul": {
                maxHeight: "400px",
                overflow: "scroll"
            },
        }
    },
    logo: {
        fontFamily: "Rye, cursive",
        fontSize: "3.0rem",
        [theme.breakpoints.down(710)]: {
            margin: '0 auto',
        }
    },
    navLink: {
        color: "inherit",
        // backgroundColor: '#AA1649',
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        display: "inline-flex",
        marginLeft: '30px',
        "&:hover,&:focus": {
            backgroundColor: "#AA1649"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: '10px',
        },
        [theme.breakpoints.down(710)]: {
            width: "calc(100% - 30px)",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            marginLeft: '0px',
            textTransform: "none",
            "& > span:first-child": {
                justifyContent: "flex-start"
            }
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        }
    },
    root: {
        flexGrow: 1
    },
    show710: {
        display: 'flex',
        [theme.breakpoints.up(710)]: {
            display: 'none'
        }
    },
    toolbar: {
        height: 65,
        display: "flex",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down(600)]: {
            justifyContent: 'flex-start'
        },
    },
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

        const drawer = (
            <div>
                <div className={classes.closeIconToolbar}>
                    {this.state.drawerOpen ? (
                        <div className={classes.closeButton}
                            onClick={this.handleClose}>
                            <CloseIcon className={classes.closeIconStyling} />
                        </div>
                    ) : null}
                </div>
                <Divider />
                <List className={classes.drawerList}>
                    <ListItem className={classes.listItem}>
                        <Button
                            href='/projects'
                            className={classes.navLink}
                        >
                            Projects
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            href='/about'
                            className={classes.navLink}
                        >
                            About Me
                        </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <Button
                            href='/contact'
                            className={classes.navLink}
                        >
                            Contact Me
                        </Button>
                    </ListItem>
                </List>
            </div>
        )

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Hidden implementation="css" className={classes.show710}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <h1 className={classes.logo}>Alex Martin</h1>
                        <Hidden implementation="css" className={classes.hide710}>
                            <div>
                                <List className={classes.list}>
                                    <ListItem className={classes.listItem}>
                                        <Button
                                            href='/projects'
                                            className={classes.navLink}
                                        >
                                            Projects
                                        </Button>
                                    </ListItem>

                                    <ListItem className={classes.listItem}>
                                        <Button
                                            href='/about'
                                            className={classes.navLink}
                                        >
                                            About Me
                                        </Button>
                                    </ListItem>

                                    <ListItem className={classes.listItem}>
                                        <Button
                                            href='/contact'
                                            className={classes.navLink}
                                        >
                                            Contact Me
                                        </Button>
                                    </ListItem>
                                </List>
                            </div>
                        </Hidden>
                    </Toolbar>
                </AppBar>

                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={'left'}
                            open={this.state.drawerOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            {drawer}
                            {/* Green 5 */}
                        </Drawer>
                    </Hidden>
                </nav>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
