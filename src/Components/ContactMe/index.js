import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = theme => ({
    contactMeDiv: {
        width: '100%',
    },
    contactMeH1: {
        fontSize: '4.5rem',
        [theme.breakpoints.down(800)]: {
            fontSize: '4.0rem',
        },
        [theme.breakpoints.down(600)]: {
            fontSize: '3.5rem',
        },
    },
    contactMeHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '100px 2.5%',
        height: '600px',
        color: 'black',
        fontSize: '3.0rem',
    },
    contactMeHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down(800)]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down(600)]: {
            fontSize: '2.2rem',
        },
        [theme.breakpoints.down(500)]: {
            fontSize: '2.0rem',
        },
        [theme.breakpoints.down(400)]: {
            fontSize: '1.7rem',
        },
    },
    contactMeHeaderTextIcons: {
        width: '100%',
        maxWidth: 500,
        marginTop: '10px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emailIconStyling: {
        height: 50,
        width: 50,
    },
    iconStyling: {
        height: 100,
        width: 100,

    },
    linkStyling: {
        color: 'black',
        textDecoration: 'none',
    }
})

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.contactMeDiv}>
                <Navbar type="black"/>
                    <header className={classes.contactMeHeader}>
                        <h1 className={classes.contactMeH1}>Contact Me</h1>
                        <h1 className={classes.contactMeHeaderTextIcons}><a href="https://www.linkedin.com/in/alex-martin-adm" className={classes.linkStyling} target="_blank"  rel="noopener noreferrer"><LinkedInIcon className={classes.iconStyling} style={{ color: '#0077B5' }} /></a> <a href="https://github.com/atonymartin20" className={classes.linkStyling} target="_blank"  rel="noopener noreferrer"><GitHubIcon className={classes.iconStyling} style={{ color: '#5E227F' }} /></a></h1>
                        <h1 className={classes.contactMeHeaderText}><EmailRoundedIcon className={classes.emailIconStyling} color='primary' />    <a href="mailto:atonymartin20@yahoo.com" className={classes.linkStyling} target="_blank"  rel="noopener noreferrer"> atonymartin20@yahoo.com</a></h1>
                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);

// Linked in
// Github
// Icon with email typed out
// center components