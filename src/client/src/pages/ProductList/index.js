import React from 'react';

import Page from './Page';
import DataFetcher from '../../components/common/DataFetcher';
import Api from '../../utils/apiClient';

export default function ProductList(props) {
  const handleFetchProducts = () => {
    return Api.get();
  };

  return (
    <DataFetcher fetchDataCallback={handleFetchProducts}>
      <Page />
    </DataFetcher>
  );
}
