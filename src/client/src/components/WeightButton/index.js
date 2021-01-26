import React, { useState, useEffect } from 'react';
import { view } from '@risingstack/react-easy-state';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { productList, uiStore } from '../../store';
import { useDebounce } from '../../utils/useDebounce';

export default view(() => {
  const [weight, setWeight] = useState('');

  const debounced = useDebounce(weight, 700);

  useEffect(() => {
    productList.loadProducts();
  }, []);

  useEffect(() => {
    if (debounced) {
      productList.setSearchParam('weight', weight);
      productList.loadProducts();
    }
  }, [debounced]);

  const handleChange = (_, newValue) => {
    setWeight(newValue);
  };

  return (
    <>
      <Typography id="range-slider" gutterBottom>
        Вага {weight && `${weight}`}
      </Typography>
      <Slider
        step={100}
        min={0}
        max={2000}
        defaultValue={1000}
        marks
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        disabled={uiStore.isLoading}
      />
    </>
  );
});
