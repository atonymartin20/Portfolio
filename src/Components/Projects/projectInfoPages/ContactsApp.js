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

class ContactsApp extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar type="black"/>
                <header className={classes.projectHeader}>
                    <div className={classes.projectsInsideDiv}>
                        <h1>ContactsApp</h1>
                        <p className={classes.stack}>Project Type:</p>
                        <p className={classes.insideText}>&emsp;Fullstack</p>

                        <p className={classes.stack}>Purpose:</p>
                        <p className={classes.insideText}>&emsp;This was a demo project that I built continuing to improve my knowledge and understanding of ContextAPI.  I also wanted to refresh my backend skillset by building a backend database that had all of the CRUD functions.  This was also my first time building a PostgresQL database.</p>

                        <p className={classes.stack}>Role:</p>
                        <p className={classes.insideText}>&emsp;As a solo project, I designed, built, and styled the entire project.</p>

                        <p className={classes.stack}>Tech Stack:</p>
                        <p className={classes.insideText}>&emsp;On the frontend I used React, MaterialUI, ContextAPI, and axios.  This allows consistent state management and a quick and reliable framework.</p>
                        <p className={classes.insideText}>&emsp;On the backend I used Node, Express, PostgresQL, and Knex.  This allowed the entire project to be written in Javascript while having a potentially large database.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(ContactsApp);