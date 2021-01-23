import React from 'react';
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function Card({ imageUrl = null, title = '', caption = '', children }) {
  return (
    <MaterialCard>
      <CardActionArea>
        {imageUrl && (
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
          />
        )}
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {caption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       {children}
      </CardActions>
    </MaterialCard>
  );
}
