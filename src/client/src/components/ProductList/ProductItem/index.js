import React, { useMemo } from 'react';
import clsx from 'clsx'
import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

export default function Card({
  imageUrl = null,
  title,
  price,
}) {
  const classes = useStyles();

  const convertedPrice = useMemo(() => price / 100, []);

  return (
    <MaterialCard className={clsx(classes.fullHeight, classes.productItemContainer)}>
      <CardActionArea className={classes.fullHeight}>
        {imageUrl && (
          <CardMedia
            className={classes.image}
            component="img"
            height="240"
            image={imageUrl}
          />
        )}
        <CardContent>
          {title && (
            <Typography variant="body1" component="p">
              {title}
            </Typography>
          )}
          {price && (
            <Typography variant="body2" color="textSecondary" component="b">
              Цiна: <span className={classes.price}>{convertedPrice}</span> грн
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}
