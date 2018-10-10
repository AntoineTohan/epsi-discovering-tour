import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import epsiImg from '../../assets/img/navbar/epsi2.png'
import wisImg from '../../assets/img/navbar/logo_WIS.png'

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
		textAlign: 'left',
	},
	imagesEpsi: {
		textAlign: 'right',
	},
	textAlignCenter: {
		textAlign: 'center',
	},
	imageEpsiSize:{
		height:'70px',
		width:'110px',
		margin:' 10px 0px 10px 0px'
	},
	imageWisSize:{
		height:'70px',
		width:'70px',
		margin:' 10px 20px 10px 0px'
	},
	colorNavbar: {
		backgroundColor:'#271549',
	},
	title: {
    fontFamily:'Roboto, sans-serif',
  },
  text: {
    fontFamily:'Montserrat, sans-serif',
  }
})

class Navbar extends Component {
  render() {
		const { classes } = this.props
    return (
      <AppBar position="static" className={classes.colorNavbar}>
        <Toolbar>
					<Grid container direction="row"justify="space-between" alignItems="center">
						<Grid item className={classes.imagesWis} xs={4}>
						<a href="http://www.wis-ecoles.com/" target="_blank">
							<img alt='Logo école Wis' className={classes.imageWisSize} src={wisImg}></img>
						</a>
						</Grid>
						<Grid item  className={`${classes.title}`} justify='center' container xs={4}>
							<Typography variant="title" color="inherit" noWrap>
							EPSI WIS DISCOVERING TOUR
							</Typography>
						</Grid>
						<Grid item className={classes.imagesEpsi} xs={4}>
						<a href="http://www.epsi.fr/" target="_blank">
							<img alt='Logo école EPSI' className={classes.imageEpsiSize} src={epsiImg}></img>
						</a>
						</Grid>
					</Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);