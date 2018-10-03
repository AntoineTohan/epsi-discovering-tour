import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import imgSecretariat from '../../assets/img/info/robotmydil.jpg'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
        <Grid container>
            <Grid item xs={6} className={classes.image}>
              <img src={props.image}/>
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