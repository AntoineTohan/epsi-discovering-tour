import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  texte:{
    textAlign: 'left',
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
        <Grid container>
            <Grid item xs={12} className={classes.image} alignContent='center'>
                <iframe width="420" height="315" src="https://www.youtube.com/embed/-dLtAhdhdsM">
                </iframe>
            </Grid>
        </Grid>

  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);