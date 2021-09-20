import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import ProjectCardList from './projectCardList.js';

const styles = () => ({
    marginTop: {
        marginTop: '15px'
    },
    projectsDiv: {
        width: '100%',
        height: 'auto',
        maxHeight: '300vh'
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
                    <h1>ReactJS Frontend:</h1>
                    <ProjectCardList projectType="react"/>
                    <h1 className={classes.marginTop}>ReactJS Fullstack:</h1>
                    <ProjectCardList projectType="fullStack"/>
                    <h1 className={classes.marginTop}>Group:</h1>
                    <ProjectCardList projectType="group"/>
                    <h1 className={classes.marginTop}>AngularJS Fullstack:</h1>
                    <ProjectCardList projectType="angular"/>
                    <h1 className={classes.marginTop}>VueJS Frontend:</h1>
                    <ProjectCardList projectType="vueJS"/>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);