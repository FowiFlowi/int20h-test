import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  turnOffSort: {
    transform: 'rotate(-180deg)',
  },
  turnOnSort: {
    transform: 'rotate(0)',
  },
}));
