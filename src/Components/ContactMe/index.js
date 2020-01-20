import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = () => ({
    contactMeDiv: {
        width: '100%',
    },
    contactMeHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 2.5%',
        height: '600px',
        color: 'black',
        fontSize: '3.5rem',
    },
    contactMeHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    emailIconStyling: {
        height: 50,
        width: 50,
    },
    iconStyling: {
        height: 50,
        width: 50,
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
                <Navbar />
                    <header className={classes.contactMeHeader}>

                        <h1 className={classes.contactMeHeaderText}><EmailRoundedIcon className={classes.emailIconStyling} color='primary' />    <a href="mailto:atonymartin20@yahoo.com" className={classes.linkStyling} target="_blank"  rel="noopener noreferrer"> atonymartin20@yahoo.com</a></h1>
                        <h1 className={classes.contactMeHeaderText}><a href="https://www.linkedin.com/in/alex-martin-adm" className={classes.linkStyling} target="_blank"  rel="noopener noreferrer"><LinkedInIcon className={classes.iconStyling} style={{ color: '#0077B5' }} /></a></h1>
                        
                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);

// Green 2