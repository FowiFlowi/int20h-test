import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  price: {
    fontWeight: 600,
    color: '#000'
  },
  productItemContainer: {
    padding: '8px',
  },
  image: {
    objectFit: 'contain'
  },
  fullHeight: {
    height: '100%',
  },
}));
