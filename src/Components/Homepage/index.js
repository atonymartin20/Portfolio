import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import HomepageImageBackground from '../../Images/HomepageImage.jpg';
import Button from "@material-ui/core/Button";

const styles = () => ({
    githubButton: {
        backgroundColor: '#0E3386',
        color: 'white',
        border: '1px solid white',
        marginTop: '15px',
        fontSize: '2rem',
        "&:hover": {
            backgroundColor: "#AA1649",
            // border: 'none',
        },
    },
    homepageDiv: {
        width: '100%',
        height: '100%',
        maxHeight: '200vh'
    },
    homepageHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundColor: 'rgba(43, 43, 43, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 2.5%',
        textShadow: '1px 1px 2px black, 1px 0px 2px black, 0px 1px 2px black, 0 0 8px #333',
        height: '600px',
        color: 'white',
        fontSize: '3.5rem',
    },
    homepageHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    homepageTopImg: {
        backgroundImage: `url(${HomepageImageBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '600px',
    },
})

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageTopImg}>
                    <header className={classes.homepageHeader}>
                        <h1 className={classes.homepageHeaderText}>Alex Martin</h1>
                        <h1 className={classes.homepageHeaderText}>Full Stack Web Developer</h1>
                        <Button
                            variant="contained"
                            href='https://github.com/atonymartin20'
                            target="_blank"
                            className={classes.githubButton}
                        >
                            Github
                        </Button>
                    </header>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);