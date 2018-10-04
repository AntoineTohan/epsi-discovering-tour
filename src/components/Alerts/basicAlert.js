import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  texte:{
    textAlign: 'left',
  },
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
        <Grid container>
            <Grid item sm={12} md={12} lg={6} className={classes.image}>
              <img src={props.image}/>
            </Grid>
            <Grid item sm={12} md={12} lg={6} className={classes.texte} alignItems='left'>
            <Typography align='left'>
              {props.text}
            </Typography>
            </Grid>
        </Grid>

  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);