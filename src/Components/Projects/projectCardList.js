import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './projectCard.js';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    fontFamily: 'Montserrat',
    // backgroundColor: '#eee',
    height: 'auto',
    minHeight: 'calc(100vh - 63px)',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '95%'
  }
});

class ProjectCardList extends React.Component {
  state = {
    projects: [
        {id: 5, name: 'test'}
    ]
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={24}>
              {this.state.projects.map(project => (
                <Grid key={project.id} item>
                  <ProjectCard
                    id={project.id}
                    name={project.name}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectCardList);
