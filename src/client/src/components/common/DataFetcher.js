import React, { useEffect, useState } from 'react';

import { noop } from '../../utils/noop';

export default function DataFetcher({ fetchDataCallback = noop, errorCallback = noop, successCallback = noop, deps = [], children}) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    const [response, error] = await fetchDataCallback();
    setResult(response);

    if (error) {
      return errorCallback(error);
    }
    successCallback(response);
  }, deps);

  const modifiedChild = React.Children.map(children, (child) => React.cloneElement(child, { result, error }))
  return (
    <>
      {modifiedChild}
    </>
  )
}