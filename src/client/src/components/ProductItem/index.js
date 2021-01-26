import React, { useMemo } from 'react';
import clsx from 'clsx';
import MaterialCard from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {uiStore} from '../../store';
import { useStyles } from './styles';

export default function ProductItem({ product }) {
  const classes = useStyles();
  
  const title = product.name;
  const price = product.price;
  const imageUrl = product.img;
  const url = product.url;
  
  const convertedPrice = useMemo(() => price / 100, []);
  const handleToggleModal = () => uiStore.toggleModal();

  return (
    <MaterialCard
      className={clsx(classes.fullHeight, classes.productItemContainer)}
      onClick={handleToggleModal}
    >
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
          <Grid container direction="column">
            {title && (
              <Typography variant="body1" component="p">
                {title}
              </Typography>
            )}
            {price && (
              <Typography variant="body2" color="textSecondary" component="b">
                Цiна: <span className={classes.price}>{convertedPrice}</span>{' '}
                грн
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary" component="b">
              Посилання <Link href={url}>тут</Link>
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}
