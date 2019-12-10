import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';
import RefreshIcon from '@material-ui/icons/Refresh';

const styles = theme => ({
    alignLeft: {
        textAlign: 'left',
        lineHeight: '1.25',
    },
    button: {
        backgroundColor: '#E59866',
        borderRadius: '8px',
        margin: 0,
        fontSize: '1.3rem',
        width: '100%',
        '&:hover': {
            backgroundColor: "#AA1649",
            color: 'white'
        }
    },
    cardFront: {
        width: 285,
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '1px solid #9AA297',
        minHeight: 330,
        padding: 0,
        margin: 0,
        height: 'auto',
        marginBottom: '20px'
    },
    cardBack: {
        width: 285,
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '1px solid #9AA297',
        minHeight: 330,
        padding: 10,
        margin: 0,
        height: 'auto',
        marginBottom: '20px',
        backgroundColor: '#E2ECF7',
    },
    container: {
        width: '100%',
        fontSize: '1.5rem',
        minHeight: 310,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
    },
    flipCard: {
        alignSelf: 'flex-end',
    },
    title: {
        fontSize: '2.2rem',
        marginBottom: 10
    },

});

class ProjectCard extends React.Component {
    state = {
        name: this.props.name,
        id: this.props.id,
        picture: this.props.picture,
        github: this.props.github,
        deployedLink: this.props.deployedLink,
        description: this.props.description,
        additionalInfo: this.props.additionalInfo,
        isFlipped: false,
    };

    ClickHandler = event => {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    };

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({ [target.name]: target.value });
    };

    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue
        });
    };

    render() {
        const { classes } = this.props;
        const { name, picture, github, deployedLink, description, additionalInfo } = this.state;
        return (
            <div>
                <h1 className={classes.title} onClick={this.ClickHandler}>{name}</h1>
                <ReactCardFlip
                    isFlipped={this.state.isFlipped}
                    flipDirection="horizontal"
                >
                    <Card className={classes.cardFront} key="front" onClick={this.ClickHandler}>
                        <img src={picture} />
                    </Card>

                    <Card className={classes.cardBack} key="back">
                        <CardContent className={classes.container}>
                            <RefreshIcon onClick={this.ClickHandler} className={classes.flipCard} style={{ width: '20px', height: '20px', padding: '0px' }} />
                            <span className={classes.alignLeft}>{description}</span>
                            <Button
                                href={deployedLink}
                                variant="contained"
                                target="_blank"
                                className={classes.button}
                            >
                                Link to {name}
                            </Button>
                            <Button
                                href={github}
                                variant="contained"
                                target="_blank"
                                className={classes.button}
                            >
                                {name}'s Github
                            </Button>
                            <Button
                                href={additionalInfo}
                                variant="contained"
                                target="_blank"
                                className={classes.button}
                            >
                                More information
                            </Button>

                        </CardContent>
                    </Card>
                </ReactCardFlip>
            </div>
        );
    }
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);