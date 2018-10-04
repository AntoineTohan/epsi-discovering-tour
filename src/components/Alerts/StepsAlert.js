import React from 'react';
import Typography from '@material-ui/core/Typography';
import imgSecretariat from '../../assets/img/info/robotmydil.jpg'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    texte:{
        textAlign: 'left',
      },
});

const getText = (text) => text ? text.split('\n').map(line => (
    <span> {line} <br /></span>
)) : ''

function StepAlert1(props) {
  const { classes, text } = props;

  return (
        <Grid container>
            <Grid item xs={6}>
                <img alt='Sécretariat 1' src={imgSecretariat}/>
            </Grid>
            <Grid item xs={6} className={classes.texte} alignItems='left'>
                <Typography variant="body2" gutterBottom>
                    {getText(text)}
                </Typography>
            </Grid>
        </Grid>

  );
}

function StepAlert2(props) {
    const { classes, text } = props;
  
    return (
          <Grid container>
              <Grid item xs={6}>
                  <img alt='Sécretariat 2' src={imgSecretariat}/>
              </Grid>
              <Grid item xs={6} className={classes.texte} alignItems='left'>
                {getText(text)}
              </Grid>
          </Grid>
  
    );
  }
  function StepAlert(props) {
      return props.step === 1 ? <StepAlert1 {...props} /> : <StepAlert2 {...props} />
  }

export default  withStyles(styles, { withTheme: true }) (StepAlert);