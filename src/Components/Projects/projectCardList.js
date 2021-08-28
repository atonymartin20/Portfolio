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
            { id: 1, name: 'League Management', github: 'https://github.com/Lambda-School-Labs/labspt2-league-management', deployedLink: 'https://leaguemanagement.netlify.app/', description: 'League Management is the fast easy solution to managing and organizing your sports leagues.',additionalInfo: './projectInfoPages/LeagueManagement' },
            { id: 2, name: 'Treasure Hunt', github: 'https://github.com/atonymartin20/TreasureHunt', deployedLink: 'https://dazzling-tesla-7c91b1.netlify.app/', description: 'Treasure Hunt is a simple treasure hunting game where the user can traverse the island, collect treasure, unearth powerful artifacts, and more.', additionalInfo: './projectInfoPages/TreasureHunt' }
        ],
        soloProjects: [
            { id: 1, name: 'Baseball Project', github: 'https://github.com/atonymartin20/BaseballProject', deployedLink: 'https://baseball-project-adm.netlify.app/', description: 'Baseball Project is a project that can help you with your fantasy baseball draft.  You can sort through each position of players and get the 2021 projected stats along with their stats from 2017 - 2020.', additionalInfo: './projectInfoPages/BaseballProject' },
            { id: 2, name: 'Contacts App', github: 'https://github.com/atonymartin20/ContactsApp', deployedLink: 'https://contacts-app-adm.netlify.app/', description: 'Contacts App is a traditional contact app.  Add, edit, and delete your contacts whenever necessary.', additionalInfo: './projectInfoPages/ContactsApp' },
            { id: 3, name: 'Hero Game', github: 'https://github.com/atonymartin20/hero-game', deployedLink: 'https://hero-game-adm.netlify.app/', description: 'Hero Game is a basic hero fighting game.  You can create and edit heros and then fight against other heroes.', additionalInfo: './projectInfoPages/HeroGame' }
        ],
        frontendOnlyProjects: [
            { id: 1, name: 'Coffee-roasters', github: 'https://github.com/atonymartin20/coffee-roasters', deployedLink: 'https://coffeeroasters-adm.netlify.app/', description: 'Coffeeroasters is a simple online coffee retailer that specializes in quick and efficient delivery of our premium roast coffee.', additionalInfo: './projectInfoPages/CoffeeRoasters' },
            { id: 2, name: 'Rock Paper Scissors', github: 'https://github.com/atonymartin20/rock-paper-scissors', deployedLink: 'https://rock-paper-scissors-adm.netlify.app/', description: 'Rock Paper Scissors has 2 modes.  First is basic mode which is your typical rock paper scissors gameplay.  Advanced mode adds Lizard and Spock for increased difficulty.', additionalInfo: './projectInfoPages/RockPaperScissors' },
            { id: 3, name: 'Sandwich Shoppe', github: 'https://github.com/atonymartin20/sandwich-shoppe', deployedLink: 'https://sandwich-shoppe-adm.netlify.app', description: 'Sandwich Shoppe is designed for your local sandwich shoppe.  Order online or just browse all that we have to offer.', additionalInfo: './projectInfoPages/SandwichShoppe' },
            { id: 4, name: 'Invoice App', github: 'https://github.com/atonymartin20/invoice-app', deployedLink: 'https://invoice-app-adm.netlify.app/', description: 'Invoice App is an invoice tracker that can keep track of a companies invoices and easily show all active invoices.', additionalInfo: './projectInfoPages/InvoiceApp' },
            { id: 5, name: 'Photosnap', github: 'https://github.com/atonymartin20/photosnap', deployedLink: 'https://photosnap-adm.netlify.app/', description: 'Photosnap is a new platform for photographers and visual storytellers to share their photos.', additionalInfo: './projectInfoPages/Photosnap' },

            // { id: 9999, name: '', picture: ('image is 285 x 330'), github: '', deployedLink: '', description: '', additionalInfo: '' },
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

        else if (projectType === 'frontEnd') {
            return (
                <div className={classes.content}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5}>
                                {this.state.frontendOnlyProjects.map(project => (
                                    <Grid key={project.id} item>
                                        <ProjectCard
                                            id={project.id}
                                            name={project.name}
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