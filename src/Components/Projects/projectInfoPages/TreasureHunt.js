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

class TreasureHuntInfo extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar type="black"/>
                <header className={classes.projectHeader}>
                    <div className={classes.projectsInsideDiv}>
                        <h1>Treasure Hunt</h1>
                        <p className={classes.stack}>Project Type:</p>
                        <p className={classes.insideText}>&emsp;Group</p>

                        <p className={classes.stack}>Purpose:</p>
                        <p className={classes.insideText}>&emsp;This was initially a data structures project that involved mapping data and traversing the map.  Eventually you would find the location for the coin mine and would then mine for Lambda Coins.  This project initially contained a very minimalistic front end design since most interaction happened on our backend.  Then we flushed out the front end to make the project more interactive and easier to understand.  In Treasure Hunt, you can travel around the maze collecting treasure, find and equip clothing which can boost your stats, pray at altars for new powers, and mine for Lambda Coins.</p>

                        <p className={classes.stack}>Role:</p>
                        <p className={classes.insideText}>&emsp;I began this process working on the data structures portion of the project mapping the data and beginning a breadth first traversal algorithm to traverse the data.  I then shifted to the frontend when we gained a third team member and helped to flush out the frontend design and implemented ContextAPI.</p>

                        <p className={classes.stack}>Tech Stack:</p>
                        <p className={classes.insideText}>&emsp;On the frontend we used React, Styled Components, ContextAPI, and axios.  This project continued to evolve iin complexity and using styled components allowed us to easily maintain styling in a consistent manner.</p>
                        <p className={classes.insideText}>&emsp;On the backend we used Python3 as this project required the need to traverse the data and to use blockchain to mine the Lambda Coins.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(TreasureHuntInfo);