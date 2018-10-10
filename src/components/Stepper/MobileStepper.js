import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'


const styles = theme => ({
  root: {
    height: 380,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  icon: {
    width: '35px'
  }
})

class MobileStepper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSteps: ['outside'],
      open: false,
      hidden: false,
    }
  }

  componentWillReceiveProps(props) {
    if(!this.state.activeSteps.includes(props.sceneKey)) {
      this.setState({activeSteps: [...this.state.activeSteps, props.sceneKey]})
    }
  }

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden,
    }))
  }

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      })
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  render() {
    const { classes, steps } = this.props
    const { hidden, open } = this.state

    return (
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          open={open}
        >
          {steps.map(step => (
            <SpeedDialAction
              key={step.id}
              icon={<img src={step.icon} className={classes.icon}/>}
              tooltipTitle={step.tooltip}
              tooltipOpen
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
    )
  }
}

MobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MobileStepper)