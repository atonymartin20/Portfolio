import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import ReactCardFlip from 'react-card-flip';

const styles = theme => ({
    cardFront: {
        width: 285,
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxShadow: '1px 1px 4px #333, 2px 2px 7px #1565c0',
        minHeight: '330px',
        backgroundColor: '#1565c0dd',
        padding: 0,
        margin: 0,
        height: 'auto',
        marginBottom: '20px'
    },
    cardBack: {
        minWidth: '285px',
        maxWidth: '320px',
        width: '45%',
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxShadow: '1px 1px 4px #333, 2px 2px 7px #1565c0',
        minHeight: '375px',
        backgroundColor: '#E2ECF7',
        padding: 0,
        margin: 0,
        marginRight: -35,
        height: 'auto'
    },
    container: {
        width: '100%',
        padding: '15px'
    },
    textField: {
        borderRadius: 6,
        boxShadow: '1px 1px 2px #333, 2px 2px 3px #1565c0cc',
        height: 'auto'
    },
    textFieldBack: {
        borderRadius: 6,
        boxShadow: '1px 1px 2px #333, 2px 2px 3px #1565c0cc',
        position: 'relative'
    },
    title: {
        fontSize: '1.6rem',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Montserrat',
        color: 'white',
        textShadow: '1px 2px 3px #111',
        marginBottom: 8
    },
    button: {
        backgroundColor: '#24D830',
        borderRadius: '8px',
        fontFamily: 'Montserrat',
        '&:hover': {
            backgroundColor: '#32C156'
        }
    },
    header: {
        display: 'inline-block',
        padding: '0 3px',
        marginBottom: 8,
        borderBottom: '1px solid #999',
        fontSize: '1rem'
    },
    record: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 7,
        color: '#333',
        marginTop: 12,
        textShadow: '1px 1px 2px #aaa'
    },
    recordContent: {
        fontSize: '.9rem',
        marginRight: 10,
        padding: '10px 5px'
    },
});

class ProjectCard extends React.Component {
    state = {
        name: this.props.name,
        id: this.props.id,
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
        const { name } = this.state;

        return (
            <div>
                <ReactCardFlip
                    isFlipped={this.state.isFlipped}
                    flipDirection="horizontal"
                >
                    {/* Card only flips when EditIcon is clicked. */}
                    <Card className={classes.cardFront} key="front">
                        <CardContent className={classes.container}>
                            <Typography className={classes.title}>
                                {name}
                                <EditIcon
                                    onClick={this.ClickHandler}
                                    style={{ cursor: 'pointer' }}
                                />
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.cardBack} key="back">
                        <CardContent className={classes.container}>

                        </CardContent>
                        <CardActions>
                            <Button
                                size="large"
                                fullWidth
                                type="submit"
                                variant="contained"
                                className={classes.button}
                                onClick={this.EditHandler}
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