import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Button from '@material-ui/core/Button';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { uiStore } from '../../store';

export default view(() => {
  const handleOnClick = () => {
    uiStore.toggleModal();
  }

  return (
    <Button onClick={handleOnClick}>
      <TrendingUpIcon />
    </Button>
  )
});
