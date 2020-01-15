import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './projectCard.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    content: {
        height: 'auto',
        padding: '20px',
        width: '95%',
    },
});

class ProjectCardList extends React.Component {
    state = {
        groupProjects: [
            { id: 1, name: 'League Management', picture: require('./images/LeagueManagement.jpg'), github: 'https://github.com/Lambda-School-Labs/labspt2-league-management', deployedLink: 'https://leaguemanagement.netlify.com/', description: 'League Management is the fast easy solution to managing and organizing your sports leagues.',additionalInfo: './projectInfoPages/LeagueManagement.js' },
            { id: 2, name: 'Treasure Hunt', picture: require('./images/TreasureHunt.jpg'), github: 'https://github.com/atonymartin20/TreasureHunt', deployedLink: 'https://dazzling-tesla-7c91b1.netlify.com/', description: 'Treasure Hunt is a simple treasure hunting game where the user can traverse the island, collect treasure, unearth powerful artifacts, and more.', additionalInfo: './projectInfoPages/TreasureHunt.js' }
        ],
        soloProjects: [
            { id: 1, name: 'Baseball Project', picture: require('./images/BaseballProject.jpg'), github: 'https://github.com/atonymartin20/BaseballProject', deployedLink: 'https://baseball-project-adm.netlify.com/', description: 'Baseball Project is a project that can help you with your fantasy baseball draft.  You can sort through each position of players and get the 2020 projected stats along with their stats from 2017 - 2019.', additionalInfo: './projectInfoPages/BaseballProject.js' },
            { id: 2, name: 'Contacts App', picture: require('./images/ContactsApp.jpg'), github: 'https://github.com/atonymartin20/ContactsApp', deployedLink: 'https://contacts-app-adm.netlify.com/', description: 'Contacts App is a traditional contact app.  Add, edit, and delete your contacts whenever necessary.', additionalInfo: './projectInfoPages/ContactsApp.js' },
        ]
    };

    render() {
        const { classes, projectType } = this.props;
        if (projectType === 'solo') {
            return (
                <div className={classes.content}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5}>
                                {this.state.soloProjects.map(project => (
                                    <Grid key={project.id} item>
                                        <ProjectCard
                                            id={project.id}
                                            name={project.name}
                                            picture={project.picture}
                                            github={project.github}
                                            deployedLink={project.deployedLink}
                                            description={project.description}
                                            additionalInfo={project.additionalInfo}
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
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5}>
                                {this.state.groupProjects.map(project => (
                                    <Grid key={project.id} item>
                                        <ProjectCard
                                            id={project.id}
                                            name={project.name}
                                            picture={project.picture}
                                            github={project.github}
                                            deployedLink={project.deployedLink}
                                            description={project.description}
                                            additionalInfo={project.additionalInfo}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}

export default withStyles(styles)(ProjectCardList);