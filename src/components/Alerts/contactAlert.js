import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class TextFieldsStepOne extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-Prenom"
          label="Prenom"
          placeholder="Prenom"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-Nom"
          label="Nom"
          placeholder="Nom"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

class TextFieldsStepTwo extends React.Component {
  
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-E-mail"
            label="E-mail"
            placeholder="E-mail"
            className={classes.textField}
            margin="normal"
          />
        </form>
      );
    }
  }

  class TextFieldsStepThree extends React.Component {
  
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-multiline-flexible"
          placeholder="Une Question ?"
          multiline
          rowsMax="4"
          className={classes.textField}
          margin="normal"
        />
        </form>
      );
    }
  }


  class TextFields extends React.Component {
    render() {
        if (this.props.step === 1){
            return (<TextFieldsStepOne {...this.props} />)
        }else if (this.props.step === 2){
            return (<TextFieldsStepTwo {...this.props} />)
        }else if (this.props.step === 3){
            return (<TextFieldsStepThree {...this.props} />)
        }
    }
  }

export default withStyles(styles)(TextFields);