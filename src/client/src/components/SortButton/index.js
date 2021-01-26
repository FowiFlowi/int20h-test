import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';
import { productList, uiStore } from '../../store';
import { useStyles } from './styles';

const primaryColor = 'primary';
const defaultColor = 'default';

export default view(() => {
  const classes = useStyles();

  const [isSortTurn, setIsSortTurn] = useState(1);

  const handleToggleSort = () => {
    const newSortValue = isSortTurn * -1;
    setIsSortTurn(newSortValue);
    productList.setSearchParam('sort', newSortValue);
    productList.loadProducts();
  };

  return (
    <Button
      onClick={handleToggleSort}
      color={isSortTurn === -1 ? primaryColor : defaultColor}
      disabled={uiStore.isLoading}
    >
      <SortIcon
        className={clsx(
          classes.turnOffSort,
          isSortTurn === -1 && classes.turnOnSort
        )}
      />
    </Button>
  );
});
