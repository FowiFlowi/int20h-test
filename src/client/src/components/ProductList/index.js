import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '../ProductItem';
import { productsStore } from '../../store';
import SearchInput from '../SearchInput';
import WeightButton from '../WeightButton';
import SortButton from '../SortButton';
import TrendingButton from '../TrendingButton';
import { useStyles } from './styles';

export default view(() => {
  const shouldRenderLoader = productsStore.products === null;
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="space-between" className={classes.pageWrapper}>
        <SearchInput />
        <Grid container className={classes.contentWrapper} container direction="column">
          <Grid>
            <WeightButton />
          </Grid>
          <Grid container justify="flex-end">
            <TrendingButton />
            <SortButton />
          </Grid>
        </Grid>
      </Grid>
      {shouldRenderLoader && <LinearProgress color="primary" />}
      {!shouldRenderLoader && (
        <Grid container spacing={3} direction="row">
          {productsStore.products.map((product) => {
            return (
              <Grid item md={4} xs={12} key={product.uuid}>
                <Card product={product} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
});
