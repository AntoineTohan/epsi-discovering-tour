import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = ({
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
        <Grid container>
            <Grid item xs={6} className={classes.image}>
              <img alt='Basic Alert' src={props.image}/>
            </Grid>
            <Grid item xs={6}className={classes.texte}>
              {props.text}
            </Grid>
        </Grid>

  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);