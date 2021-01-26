import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductsPage from '../components/ProductList';
import Notifications from '../components/Notifications';
import Modal from '../components/Modal';
import { productsStore, uiStore } from '../store';
import { useStyles } from './styles';

export default function App() {
  const classes = useStyles();

  useEffect(() => {
    productsStore.loadProductsPrice();
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            CAN
          </Typography>
          <Notifications />
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <ProductsPage />
        </Container>
        <Modal />
      </main>
    </div>
  );
}
