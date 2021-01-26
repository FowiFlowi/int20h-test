import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import TextField from '@material-ui/core/TextField';
import Cancel from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { productsStore, uiStore } from '../../store';
import { useStyles } from './styles';

const defaultSearchValue = 'гречана крупа';
const enterButton = 'Enter';

export default view(() => {
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const classes = useStyles();

  const handleSearchClick = (value) => {
    productsStore.setSearchParam('search', value || searchValue);
    productsStore.loadSearchProducts();
  };

  const handleSearchInputOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
    handleSearchClick('');
  }

  const handleButtonPress = (e) => {
    if (e.key === enterButton) {
      handleSearchClick();
    }
  };

  return (
    <TextField
      type="text"
      value={searchValue}
      className={classes.searchInput}
      placeholder="цукерочка"
      margin="normal"
      onChange={handleSearchInputOnChange}
      onKeyDown={handleButtonPress}
      disabled={uiStore.isLoading}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
            {searchValue && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClearInput}
              >
                <Cancel />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
});
