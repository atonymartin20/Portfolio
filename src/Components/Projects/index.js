import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import ProjectCardList from './projectCardList.js';

const styles = () => ({
    projectsDiv: {
        width: '100%',
        height: '2500px',
        maxHeight: '200vh'
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
})

class Projects extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar type="black"/>
                <header className={classes.projectHeader}>
                    <h1>Group Projects:</h1>
                    <ProjectCardList projectType="group"/>
                    <h1>Solo Projects:</h1>
                    <ProjectCardList projectType="solo"/>
                </header>
            </div>
        )
    }
}

// Green 2
export default withStyles(styles)(Projects);