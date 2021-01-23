import React from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../../components/Root/Card';

import { useStyles } from './styles';

export default function Page(props) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Grid container spacing={3} direction="row">
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <Grid item md={4} sm={12} key={i}>
              <Card title="product" caption="product caption" />
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}