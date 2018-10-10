import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  root: {
    textAlign: 'center',
    '&>div': {
      background: 'transparent'
    }
  },
  stepsHeader: {
    marginBottom: '-10px',
    color: 'grey'
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  notVisited: {
    background: 'rgba(0, 0, 0, 0.8)',
    height: '50px', 
    width: '50px', 
    padding: '5px',
    borderRadius: '30px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  visited: {
    background: '#2196f3',
    height: '50px', 
    width: '50px', 
    padding: '5px',
    borderRadius: '30px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  tooltip: {
    fontSize: '15px',
  }
})

class DesktopStepper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSteps: ['outside'],
    }
  }

  componentWillReceiveProps(props) {
    if(!this.state.activeSteps.includes(props.sceneKey)) {
      this.setState({activeSteps: [...this.state.activeSteps, props.sceneKey]})
    }
  }

  render() {
    const { classes, handleSceneChange, steps } = this.props
    const { activeSteps } = this.state
  
    return (
      <div className={classes.root}>
        <Stepper connector={<StepConnector />} >
          {steps.map((step, index) => (
              <Step key={step.id} >
                <StepLabel
                  onClick={() => handleSceneChange(step.id)}
                  StepIconComponent={() => StepIcon(step.icon, step.tooltip, activeSteps.includes(step.id), classes)}
                />
              </Step>
            )
          )}
        </Stepper>
      </div>
    )
  }
}

const StepConnector = () => (
  <div style={{width: '100%', borderBottom: 'dotted grey'}}></div>
)

const StepIcon = (icon, tooltip, isVisited, classes) => (
  <Tooltip title={tooltip} placement={'top'} classes={{tooltip: classes.tooltip}}>
    <div className={isVisited ? classes.visited : classes.notVisited}>
      <img src={icon} />
    </div>
  </Tooltip>
)

DesktopStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(DesktopStepper)