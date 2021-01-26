import React, { useState, useEffect } from 'react';
import { view } from '@risingstack/react-easy-state';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { productsStore, uiStore } from '../../store';
import { useDebounce } from '../../utils/useDebounce';

export default view(() => {
  const [weight, setWeight] = useState('');

  const debounced = useDebounce(weight, 700);

  useEffect(() => {
    productsStore.loadProducts();
  }, []);

  useEffect(() => {
    if (debounced) {
      productsStore.setSearchParam('weight', weight);
      productsStore.loadProducts();
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
