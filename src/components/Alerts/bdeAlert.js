import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  videoContainer: {
    width: '100%',
    textAlign: 'center'
  }
});

function MediaControlCard(props) {
  const { classes } = props;

  return (
    <div className={classes.videoContainer}>
      <iframe width="420" height="315" src="https://www.youtube.com/embed/-dLtAhdhdsM" title='Vidéo présentation BDE' />
    </div>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);