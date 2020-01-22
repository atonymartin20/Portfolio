import React from 'react';
import Navbar from '../Navbar';
import withStyles from "@material-ui/core/styles/withStyles";
import Headshot from '../../Images/AlexMartinHeadshot.jpg';

const styles = theme => ({
    aboutMeDiv: {
        width: '100%',
        height: '100%',
        maxHeight: '200vh',
    },
    aboutMeH1: {
        fontSize: '4.5rem',
        marginBottom: 20,
        width: '100%',
        textAlign: 'center',
        [theme.breakpoints.down(800)]: {
            fontSize: '4.0rem',
        },
        [theme.breakpoints.down(600)]: {
            fontSize: '3.5rem',
        },
    },
    aboutMeHeader: {
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: '100px 2.5%',
        color: 'black',
        fontSize: '3.0rem',
        margin: '0 auto',
    },
    aboutMeHeaderText: {
        marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'left',
        fontSize: '2.5rem',
        width: '100%',
        lineHeight: '1.15',
        maxWidth: 1000,
        [theme.breakpoints.down(1475)]: {
           maxWidth: 900,
        },
        [theme.breakpoints.down(1375)]: {
            maxWidth: 800,
         },
         [theme.breakpoints.down(1160)]: {
            maxWidth: 700,
         },
         [theme.breakpoints.down(1060)]: {
            maxWidth: 600,
         },
        [theme.breakpoints.down(1000)]: {
            fontSize: '2.25rem',
        },
        [theme.breakpoints.down(700)]: {
            fontSize: '2.0rem',
        },
        [theme.breakpoints.down(550)]: {
            fontSize: '1.85rem',
        },
        [theme.breakpoints.down(400)]: {
            fontSize: '1.7rem',
        },
    },
    headshot: {
        [theme.breakpoints.down(2000)]: {
            width: 600,
        },
        [theme.breakpoints.down(1700)]: {
            width: 500,
        },
        [theme.breakpoints.down(1650)]: {
            width: 450,
        },
        [theme.breakpoints.down(1600)]: {
            width: 400,
        },
        [theme.breakpoints.down(1300)]: {
            width: 350,
        },
        [theme.breakpoints.down(1220)]: {
            width: 300,
        },
        [theme.breakpoints.down(950)]: {
            marginTop: 15,
            width: 450,
        },
        [theme.breakpoints.down(550)]: {
            width: 425,
        },
        [theme.breakpoints.down(400)]: {
            width: 300,
        },
        [theme.breakpoints.down(300)]: {
            width: '100%',
        },
    },
})

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.aboutMeDiv}>
                <Navbar type='black' />
                    <header className={classes.aboutMeHeader}>
                        <h1 className={classes.aboutMeH1}>About Me</h1>
                        <h1 className={classes.aboutMeHeaderText}>How's it going everyone? My name is Alex. I am a full-stack web developer with a particular interest in front-end development. My specialties include React, ContextAPI, Javascript, Redux, NodeJS, and Express.
                        <br/><br />
                        I've spent time working in a multitude of industries. I've worked in a factory helping to make sure that production quotas were consistently hit. I've also worked in an environment where I was communicating with customers on a daily basis, and worked to improve the user experience. I am interested in combining those skills in a team environment building cutting-edge projects.
                        <br /><br />
                        In my free time I enjoy cooking, watching auto racing, playing softball, and flying my drone simulation software. If you want to know more about me, please get in touch. </h1>
                        <img src={Headshot} className={classes.headshot} alt='Alex Martin Headshot' />

                    </header>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe);


// Personal Mission Statement
//  Mission Statement must be approved by Career Coach (you can use the summary you wrote in your Linkedin summary, for example)

//  Skills
// List out your main technical skills 