import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const styles = {
  card: {
    maxWidth: 500,
    maxHeight: 500,
    minWidth: 500,
    minHeight: 500
  },
  media: {
    objectFit: 'cover',
  },
  positionImageCard: {
    margin: '20px 0px 20px 0px',
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontFamily:'Roboto, sans-serif',
  },
  text: {
    fontFamily:'Montserrat, sans-serif',
  }
};

function ImgMediaCard(props) {
  const { classes, image, title , description } = props;
  return (
    <Card className={`${classes.card} ${classes.positionImageCard}`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={`${classes.media}`}
          height="170"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={`${classes.title}`}>
            {title}
          </Typography>
          <Typography component="p" className={`${classes.text}`}>
              {description.split('\n\n').map((line, idx) => (
                <span key={idx}> {line} <br /></span>
              ))}
          </Typography>
      
        </CardContent>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);