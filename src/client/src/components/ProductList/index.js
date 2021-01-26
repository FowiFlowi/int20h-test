import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '../ProductItem';
import { productList } from '../../store';
import SearchInput from '../SearchInput';
import WeightButton from '../WeightButton';
import SortButton from '../SortButton';

export default view(() => {
  const shouldRenderLoader = productList.products === null;

  return (
    <div>
      <Grid container justify="space-between" style={{ marginBottom: '8px' }}>
        <SearchInput />
        <Grid container style={{ width: '20%' }} container direction="column">
          <Grid>
            <WeightButton />
          </Grid>
          <Grid container justify="flex-end">
            <SortButton />
          </Grid>
        </Grid>
      </Grid>
      {shouldRenderLoader && <LinearProgress color="primary" />}
      {!shouldRenderLoader && (
        <Grid container spacing={3} direction="row">
          {productList.products.map((product) => {
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
