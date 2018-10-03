import React from 'react';
import Typography from '@material-ui/core/Typography';
import imgSecretariat from '../../assets/img/info/robotmydil.jpg'
import Grid from '@material-ui/core/Grid';

function StepAlert1(props) {
  const { classes, theme } = props;

  return (
        <Grid container>
            <Grid item xs={6}>
                <img src={imgSecretariat}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2" gutterBottom>
                    {props.text}
                </Typography>
            </Grid>
        </Grid>

  );
}

function StepAlert2(props) {
    const { classes, theme } = props;
  
    return (
          <Grid container>
              <Grid item xs={6}>
                  <img src={imgSecretariat}/>
              </Grid>
              <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                  {props.text}
                  </Typography>
              </Grid>
          </Grid>
  
    );
  }
  function StepAlert(props) {
      return props.step === 1 ? <StepAlert1 /> : <StepAlert2 />
  }

export default StepAlert;