import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  texte:{
    textAlign: 'left',
  },
  title: {
    fontFamily:'Roboto, sans-serif',
  },
  text: {
    fontFamily:'Montserrat, sans-serif',
  },
  textContainer: {
    textAlign: 'center'
  }
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
    <Grid container>
        <Grid item sm={12} md={12} lg={6} className={`${classes.image} ${classes.title}`}>
          <img alt={props.title} src={props.image} style={{width: '100%'}}/>
        </Grid>
        <Grid item container sm={12} md={12} lg={6} className={`${classes.texte} ${classes.text} ${classes.textContainer}`} alignItems='stretch'>
        <Typography align='left' style={{marginLeft: '10px'}}>
          {props.text}
        </Typography>
        </Grid>
    </Grid>
  )
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);