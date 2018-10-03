import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    footer: {
      margin: '10px 0'
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    blackColor: {
        backgroundColor: 'black',
    },
    iconRed: {
      color: 'red',
    }
  })
class Footer extends Component {
  render() {
    const { classes } = this.props
    return (
      <footer className={classes.footer}>
        <Typography variant="subheading" align="center" color="textSecondary">
          Made with <span role="img" aria-label="love" className={classes.iconRed}>❤️</span> in Montpellier !
        </Typography>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);