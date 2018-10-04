import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import Chip from '@material-ui/core/Chip'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import Avatar from '@material-ui/core/Avatar'
import outside   from '../../assets/img/stepper/outside.png'
import myDil     from '../../assets/img/stepper/myDil.png'
import cafeteria from '../../assets/img/stepper/cafeteria.png'
import classroom from '../../assets/img/stepper/classroom.png'

const steps = [
  {
    id: 'outside',
    tooltip: 'Aller à l\'extérieur                      ',
    icon: outside
  }, {
    id: 'myDil',
    tooltip: 'Aller dans le laboratoire          ',
    icon: myDil
  }, {
    id: 'cafeteria',
    tooltip: 'Aller dans la cafétéria              ',
    icon: cafeteria
  }, {
    id: 'classroom',
    tooltip: 'Aller dans une salle de classe',
    icon: classroom
  }
]

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
    width: '40px',
    height: '40px',
    borderRadius: '40px'
  },
  button: {
    width: '50px',
    height: '50px'
  },
  chip: {
    margin: theme.spacing.unit,
  },
})

class Stepper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      hidden: false,
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
    const { classes } = this.props
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
          {steps.map(step => this.state.open && (
            <Chip
              avatar={<img src={step.icon} className={classes.icon}/>}
              label={step.tooltip}
              clickable
              className={classes.chip}
              color="primary"
              onClick={() => this.props.handleSceneChange(step.id)}
            />
          ))}
        </SpeedDial>
    )
  }
}

export default withStyles(styles)(Stepper)