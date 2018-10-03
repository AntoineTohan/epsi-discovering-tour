import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Navbar from './components/Navbar/Navbar'
import Viewer from './components/Viewer/Viewer'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import getScene from './components/Viewer/scenes'
import './App.css'

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardContainer: {
    backgroundColor: '#dddddd'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
})

class App extends Component {
  constructor(props) {    
    super(props)

    this.state = {
      sceneKey: 'outside'
    }

    this.handleSceneChange = this.handleSceneChange.bind(this)
  }

  handleSceneChange(sceneKey) {
    this.setState({sceneKey: sceneKey})
  }
  render() {
    const { sceneKey } = this.state
    const { classes } = this.props
    const scene = getScene(sceneKey)
    return (
      <React.Fragment>
          <Navbar/>
          <main className={classes.heroUnit}>
            <Viewer handleSceneChange={this.handleSceneChange} sceneKey={sceneKey} />
          </main>
          <div className={classes.cardContainer}>
            <Grid container className={`${classes.layout} ${classes.cardGrid}`}>
              <Grid item container sm={12} md={12} lg={6} justify={"center"}>
                <Card image={scene.infos.left.image} title={scene.infos.left.title} description={scene.infos.left.description}/>
              </Grid>
              <Grid item container sm={12} md={12} lg={6} justify={"center"}>
                <Card image={scene.infos.right.image} title={scene.infos.right.title} description={scene.infos.right.description} />
              </Grid>
            </Grid>
          </div>
          <Footer/>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)