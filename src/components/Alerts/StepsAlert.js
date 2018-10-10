import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = ({
    texte:{
        textAlign: 'left',
      },
      title: {
        fontFamily:'Roboto, sans-serif',
      },
      text: {
        fontFamily:'Montserrat, sans-serif',
      }
});

const getText = (text) => text ? text.split('\n').map((line, idx) => (
    <span key={idx}> {line} <br /></span>
)) : ''

function StepAlert1(props) {
  const { classes, text } = props;

  return (
        <Grid container>
            <Grid item sm={12} md={12} lg={6}>
                <img alt={props.title} src={props.image} style={{width: '100%'}}/>
            </Grid>
            <Grid item container sm={12} md={12} lg={6} className={`${classes.texte}`} alignItems='stretch'>
                <Typography variant="body2" className={`${classes.text}`} gutterBottom style={{marginLeft: '10px'}}>
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
              <Grid item sm={12} md={12} lg={6}>
                <img alt={props.title} src={props.image} style={{width: '100%'}}/>
              </Grid>
              <Grid container item sm={12} md={12} lg={6} className={`${classes.texte}`} alignItems='stretch'>
              <Typography variant="body2" className={`${classes.text}`} gutterBottom  style={{marginLeft: '10px'}}>
                {getText(text)}
              </Typography>
              </Grid>
          </Grid>
  
    );
  }
  function StepAlert(props) {
      return props.step === 1 ? <StepAlert1 {...props} /> : <StepAlert2 {...props} />
  }

export default  withStyles(styles, { withTheme: true }) (StepAlert);