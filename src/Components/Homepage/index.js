import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import HomepageImageBackground from '../../Images/HomepageImage.jpg';

const styles = theme => ({
    homepageDiv: {
        width: '100%',
        height: '2500px',
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
                        <h1>Alex Martin</h1>
                        <h2>Full Stack Web Developer</h2>

                    </header>
                </div>
                <h1>lolz</h1>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);