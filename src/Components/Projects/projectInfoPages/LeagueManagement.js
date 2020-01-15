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

class LeagueManagementInfo extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.projectsDiv}>
                <Navbar type="black" />
                <header className={classes.projectHeader}>
                    <div className={classes.projectsInsideDiv}>
                        <h1>League Management</h1>
                        <p className={classes.stack}>Project Type:</p>
                        <p className={classes.insideText}>&emsp;Group</p>

                        <p className={classes.stack}>Purpose:</p>
                        <p className={classes.insideText}>&emsp;This was a Lambda Labs project that I built along with five other developers in six weeks.  League Management is designed to allow users to run all of their sports leagues on one website.  Admins can create sports leagues, add teams, and manage their season schedules.  Coaches can access their team's personal schedule and request game cancellations in case of emergencies.  Public users can view league calendars so they can stay informed on when their favorite team plays.</p>

                        <p className={classes.stack}>Role:</p>
                        <p className={classes.insideText}>&emsp;I worked primarily on the front end of the project.  I completed the majority of the code in our AppContext file as well as the League Details information page, the sign-in and sign-up pages, and the Teams Cards components.</p>

                        <p className={classes.stack}>Tech Stack:</p>
                        <p className={classes.insideText}>&emsp;On the frontend we used React, MaterialUI, ContextAPI, React Big Calendar, React Autosuggest, React Dnd, and axios.  This allowed us to some new technology we hadn't used before while still using React and other items we had used before.</p>
                        <p className={classes.insideText}>&emsp;On the backend we used Node, Express, Passport, PostgresQL, and Knex.  We used Passport to allow users to login through their google account if they didn't want to create their own account.  This was our first time using PostgresQL and after some initial growing pains it worked really well.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(LeagueManagementInfo);