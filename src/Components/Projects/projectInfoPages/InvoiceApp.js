import React from 'react';
import Navbar from '../../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    insideText: {
        textAlign: 'left',
        fontSize: '1.6rem',
        lineHeight: 1.25,
        marginTop: 15,
        padding: 0,
    },
    projectsDiv: {
        width: '100%',
        height: '2500px',
        maxHeight: '200vh'
    },
    projectsInsideDiv: {
        marginTop: 50,
        width: '100%',
        maxWidth: 1000,
    },
    projectHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 2.5%',
        color: 'black',
        fontSize: '3.5rem',
    },
    stack: {
        fontSize: '2.3rem',
        marginTop: 20,
        textAlign: 'left',
        marginBottom: 0,
        padding: 0,
    },
})

class InvoiceApp extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar type="black" />
                <header className={classes.projectHeader}>
                    <div className={classes.projectsInsideDiv}>
                        <h1>Invoice App</h1>
                        <p className={classes.stack}>Project Type:</p>
                        <p className={classes.insideText}>&emsp;React Frontend Only</p>

                        <p className={classes.stack}>Purpose:</p>
                        <p className={classes.insideText}>&emsp;This was another corporate style project that could be used in its current state or it could have a backend built to further enhance the project.  The framework for this project is on Frontend Mentor.</p>

                        <p className={classes.stack}>Role:</p>
                        <p className={classes.insideText}>&emsp;Frontend Mentor provided the style-guide, figma files, and image assets.  I built the rest of the project.</p>

                        <p className={classes.stack}>Tech Stack:</p>
                        <p className={classes.insideText}>&emsp;This project was built using React, Context, and Vanilla CSS.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(InvoiceApp);