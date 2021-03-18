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

class BaseballProject extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar type="black" />
                <header className={classes.projectHeader}>
                    <div className={classes.projectsInsideDiv}>
                        <h1>Baseball Project</h1>
                        <p className={classes.stack}>Project Type:</p>
                        <p className={classes.insideText}>&emsp;Solo</p>

                        <p className={classes.stack}>Purpose:</p>
                        <p className={classes.insideText}>&emsp;This is a project that I have wanted to build for a while, and I will continue to improve and update this project.  I designed this project to combine the information that I use from baseball statistical website Baseball Reference, Fangraphs, and Baseball Savant into one quick website.  This allows a user to quickly see how a player's traits have changed over the past four seasons.</p>

                        <p className={classes.stack}>Role:</p>
                        <p className={classes.insideText}>&emsp;As a solo project, I designed, built, and styled the entire project.</p>

                        <p className={classes.stack}>Tech Stack:</p>
                        <p className={classes.insideText}>&emsp;On the frontend I used React, MaterialUI, ContextAPI, some React Hooks, and axios.  This allows consistent state management and a quick and reliable framework.</p>
                        <p className={classes.insideText}>&emsp;On the backend I used Node, Express, PostgresQL, and Knex.  This allowed the entire project to be written in Javascript while having a large database.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(BaseballProject);