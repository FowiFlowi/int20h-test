import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  searchInput: {
    marginBottom: '24px',
    width: '40%',
  },
  turnOffSort: {
    transform: "rotate(-180deg)",
  },
  turnOnSort: {
    transform: "rotate(0)",
  }
}));
