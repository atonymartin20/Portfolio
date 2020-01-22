import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    aboutMeDiv: {
        width: '100%',
        height: '100%',
        maxHeight: '200vh',
    },
    aboutMeH1: {
        fontSize: '4.5rem',
        margin: '0 auto',
        [theme.breakpoints.down(800)]: {
            fontSize: '4.0rem',
        },
        [theme.breakpoints.down(600)]: {
            fontSize: '3.5rem',
        },
    },
    aboutMeHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 1000,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '100px 2.5%',
        height: '600px',
        color: 'black',
        fontSize: '3.0rem',
        margin: '0 auto',
    },
    aboutMeHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        [theme.breakpoints.down(800)]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down(600)]: {
            fontSize: '2.2rem',
        },
        [theme.breakpoints.down(500)]: {
            fontSize: '2.0rem',
        },
        [theme.breakpoints.down(400)]: {
            fontSize: '1.7rem',
        },
    },

})

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.aboutMeDiv}>
                <Navbar type='black' />
                    <header className={classes.aboutMeHeader}>
                        <h1 className={classes.aboutMeH1}>About Me</h1>
                        <h1 className={classes.aboutMeHeaderText}>I don't want to fucking type this.</h1>

                        
                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);

// Profile picture
//  Professional
//  Solo headshot 
//  No hats, sunglasses, or distracting clothes/background
// Full name
//  No nicknames or gamer tags
// Personal Mission Statement
//  Mission Statement must be approved by Career Coach (you can use the summary you wrote in your Linkedin summary, for example)

//  Skills
// List out your main technical skills 