import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    projectsDiv: {
        width: '100%',
        height: '2500px',
        maxHeight: '200vh'
    },
    projectHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        // backgroundColor: 'rgba(43, 43, 43, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 2.5%',
        // textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        // height: '600px',
        color: 'black',
        fontSize: '3.5rem',
    },
})

class Projects extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar />
                    <header className={classes.projectHeader}>
                        <h1>Group Projects:</h1>
                        <h1>Solo Projects:</h1>
                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);