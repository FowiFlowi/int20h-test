import { Switch, Route } from 'react-router-dom';

import ProductList from '../pages/ProductList';

export default function RouterProvider() {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
    </Switch>
  );
}
