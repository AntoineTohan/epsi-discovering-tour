import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CameraIcon from '@material-ui/icons/PhotoCamera'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	colorGrey: {
		backgroundColor:'grey',
	},
	colorWhite: {
		backgroundColor:'#dedddd',
	},
	imagesWis: {
		width:'90px',
		height: '90px',
		position: 'relative',
		float: 'right',
		margin: '0 10px 0 0'
	},
	imagesEpsi: {
		width:'125px',
		height: '75px',
		position: 'relative',
		float: 'left',
		margin: '0 0 0 10px'
	},
	textAlignCenter: {
		textAlign: 'center',
	}
})

class Navbar extends Component {
  render() {
		const { classes } = this.props
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="title" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);