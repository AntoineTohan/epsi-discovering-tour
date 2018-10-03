import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Tooltip from '@material-ui/core/Tooltip'

import outside   from '../../assets/img/stepper/outside.png'
import myDil     from '../../assets/img/stepper/myDil.png'
import cafeteria from '../../assets/img/stepper/cafeteria.png'
import classroom from '../../assets/img/stepper/classroom.png'

const styles = theme => ({
  root: {
    marginTop: '8px'
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  notVisited: {
    background: 'rgba(0, 0, 0, 0.38)',
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
});

const steps = [
  {
    id: 'outside',
    tooltip: 'Aller à l\'extérieur',
    icon: outside
  }, {
    id: 'myDil',
    tooltip: 'Aller dans le laboratoire',
    icon: myDil
  }, {
    id: 'cafeteria',
    tooltip: 'Aller dans la cafétéria',
    icon: cafeteria
  }, {
    id: 'classroom',
    tooltip: 'Aller dans une salle de classe',
    icon: classroom
  }
]

class HorizontalLinearStepper extends React.Component {
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
    const { classes, handleSceneChange } = this.props
    const { activeSteps } = this.state
  
    return (
      <div className={classes.root}>
        <Stepper>
          {steps.map((step, index) => (
              <Step key={step.id}>
                <StepLabel
                  onClick={() => handleSceneChange(step.id)}
                  StepIconComponent={() => StepIcon(step.icon, step.tooltip, activeSteps.includes(step.id), classes)}
                />
              </Step>
            )
          )}
        </Stepper>
      </div>
    );
  }
}

const StepIcon = (icon, tooltip, isVisited, classes) => (
  <Tooltip title={tooltip} placement={'top'} classes={{tooltip: classes.tooltip}}>
    <div className={isVisited ? classes.visited : classes.notVisited}>
      <img src={icon} />
    </div>
  </Tooltip>
)

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLinearStepper);