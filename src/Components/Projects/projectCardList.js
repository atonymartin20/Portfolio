import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './projectCard.js';
import { withStyles } from '@material-ui/core/styles';

// images
import LeagueManagementIMG from './images/LeagueManagement.jpg';
import test from '/'
import TreasureHuntIMG from './images/TreasureHunt.jpg';

const styles = theme => ({
    content: {
        height: 'auto',
        padding: '20px',
        width: '95%',
    }
});

class ProjectCardList extends React.Component {
    state = {
        groupProjects: [
            { id: 1, name: 'League Management', picture: './images/TreasureHunt.jpg', text: '...' }
        ],
        soloProjects: [
            { name: 'I am a minon', picture: './images/TreasureHunt.jpg', text: '...' }
        ]
    };

    render() {
        const { classes, projectType } = this.props;
        if (projectType === 'solo') {
            return (
                <div className={classes.content}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={24}>
                                {this.state.soloProjects.map(project => (
                                    <Grid key={project.id} item>
                                        <ProjectCard
                                            id={project.id}
                                            name={project.name}
                                            picture={project.picture}
                                            text={project.text}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            );
        }

        else if (projectType === 'group') {
            return (
                <div className={classes.content}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={24}>
                                {this.state.groupProjects.map(project => (
                                    <Grid key={project.id} item>
                                        <ProjectCard
                                            id={project.id}
                                            name={project.name}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            );
        }

        else {
            return (
                <div className={classes.content}>
                    console.log('failure is eminent')
                </div>
            )
        }
    }
}

export default withStyles(styles)(ProjectCardList);
