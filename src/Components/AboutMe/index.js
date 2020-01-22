import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    githubButton: {
        backgroundColor: '#0E3386',
        color: 'white',
        border: '1px solid white',
        marginTop: '15px',
        fontSize: '2rem',
        "&:hover": {
            backgroundColor: "#AA1649",
        },
    },
    aboutMeDiv: {
        width: '100%',
        height: '100%',
        maxHeight: '200vh'
    },
    homepageHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundColor: 'rgba(43, 43, 43, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 2.5%',
        textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        height: '600px',
        color: 'white',
        fontSize: '3.5rem',
    },
    homepageHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
    },

})

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.aboutMeDiv}>
                <Navbar type='black' />
                    <header className={classes.contactMeHeader}>

                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);