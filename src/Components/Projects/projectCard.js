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

const styles = theme => ({
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
        padding: 0,
        margin: 0,
        height: 'auto',
        marginBottom: '20px',
        backgroundColor: '#E2ECF7',
    },
    container: {
        width: '100%',
        padding: '15px',
        fontSize: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: '2.2rem',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#24D830',
        borderRadius: '8px',
        fontFamily: 'Montserrat',
        '&:hover': {
            backgroundColor: '#32C156'
        }
    },
    test2: {
        display: 'flex',
        flexDirection: 'column'
    }
});

class ProjectCard extends React.Component {
    state = {
        name: this.props.name,
        id: this.props.id,
        picture: this.props.picture,
        github: this.props.github,
        deployedLink: this.props.deployedLink,
        description: this.props.description,
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

    EditHandler = async event => {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleChange = name => (event, { newValue }) => {
        this.setState({
            [name]: newValue
        });
    };

    render() {
        const { classes } = this.props;
        const { name, picture, github, deployedLink, description } = this.state;
        console.log(github)
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
                            {description}
                        </CardContent>
                        <CardActions className={classes.test2}>
                            <Button
                                size="large"
                                href={deployedLink}
                                variant="contained"
                                target="_blank"
                                className={classes.button}

                            >
                                Link to {name}
                            </Button>
                            <Button
                                size="large"
                                href={github}
                                variant="contained"
                                target="_blank"
                                className={classes.button}

                            >
                                Github
                            </Button>
                            <Button
                                size="large"
                                onClick={this.EditHandler}
                                variant="contained"
                                className={classes.button}
                            >
                                Save Team
                            </Button>
                        </CardActions>
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