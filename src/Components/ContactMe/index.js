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
        // backgroundColor: 'rgba(43, 43, 43, 0.1)',
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
    homepageHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: 'orange',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconStyling: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
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

                        <h1 className={classes.homepageHeaderText}><EmailRoundedIcon className={classes.iconStyling}/>    <a href="mailto:atonymartin20@yahoo.com" className={classes.linkStyling} target="_blank"> atonymartin20@yahoo.com</a></h1>
                        <h1 className={classes.homepageHeaderText}><a href="https://www.linkedin.com/in/alex-martin-adm" className={classes.linkStyling} target="_blank"><LinkedInIcon className={classes.iconStyling}/></a></h1>
                        
                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);