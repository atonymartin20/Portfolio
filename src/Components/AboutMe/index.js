import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    aboutMeDiv: {
        width: '100%',
        height: '100%',
        maxHeight: '200vh'
    },
    aboutMeHeader: {
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
    aboutMeHeaderText: {
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
                    <header className={classes.aboutMeHeader}>

                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);

// About Me 
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