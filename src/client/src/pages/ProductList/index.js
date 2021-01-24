import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { view } from '@risingstack/react-easy-state';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SortIcon from '@material-ui/icons/Sort';
import SearchIcon from '@material-ui/icons/Search';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Cancel from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '../../components/ProductList/ProductItem';
import { productList } from '../../components/common/AppContext';
import useDebounce from '../../utils/useDebounce';
import { useStyles } from './styles';

const defaultSearchValue = 'гречана крупа';

export default view(() => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [isSortTurn, setIsSortTurn] = useState(1);
  const [weight, setWeight] = useState([0, 3000]);

  const debounced = useDebounce(weight, 700);

  useEffect(async () => {
    await productList.loadProducts();
  }, []);

  useEffect(() => {
    if (debounced) {
      productList.loadProducts({ search: searchValue, sort: isSortTurn });
    }
  }, [debounced])

  const handleSearchInputOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    productList.loadProducts({ search: searchValue, sort: isSortTurn });
  };

  const handleButtonPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleToggleSort = () => {
    const newSortValue = isSortTurn === 1 ? -1 : 1;
    setIsSortTurn(newSortValue);
    productList.loadProducts({ search: searchValue, sort: newSortValue });
  };

  const handleChange = (event, newValue) => {
    setWeight(newValue);
  };

  const shouldRenderLoader = productList.products === null;

  const [minWeight, maxWeight] = weight;


  return (
    <div className={classes.productList}>
      <Grid container justify="space-between" style={{ marginBottom: '8px' }}>
        <TextField
          type="text"
          value={searchValue}
          className={classes.searchInput}
          placeholder="цукерочка"
          margin="normal"
          onChange={handleSearchInputOnChange}
          onKeyDown={handleButtonPress}
          disabled={productList.isLoading}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearchClick}>
                  <SearchIcon />
                </IconButton>
                {searchValue && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setSearchValue('')}
                  >
                    <Cancel />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        <Grid container style={{ width: '20%' }} container direction="column">
          <Grid>
            <Typography id="range-slider" gutterBottom>
              Вага ({minWeight}г - {maxWeight}г)
            </Typography>
            <Slider
              value={weight}
              step={200}
              min={0}
              max={3000}
              marks
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              disabled={productList.isLoading}
            />
          </Grid>
          <Grid container justify="flex-end">
            <Button
              onClick={handleToggleSort}
              color={isSortTurn === -1 ? 'primary' : 'default'}
              disabled={productList.isLoading}
            >
              <SortIcon
                className={clsx(
                  classes.turnOffSort,
                  isSortTurn === -1 && classes.turnOnSort
                )}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {shouldRenderLoader && <LinearProgress color="primary" />}
      {!shouldRenderLoader && (
        <Grid container spacing={3} direction="row">
          {productList.products.map((product) => {
            return (
              <Grid item md={3} sm={12} key={product.uuid}>
                <Card
                  title={product.name}
                  price={product.price}
                  imageUrl={product.img}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
});
