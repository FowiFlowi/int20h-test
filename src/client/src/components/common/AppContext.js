import { store } from '@risingstack/react-easy-state';
import Api from '../../utils/apiClient';

export const productList = store({
  products: null,
  isLoading: false,
  error: null,
  async loadProducts(ops = {}) {
    const requestParams = {
      path: '/products',
      fallbackResponse: { products: null },
      queryParams: {
        ...(ops.search && { search: ops.search }),
        ...(ops.sort && { sort: ops.sort }),
      },
    };

    productList.products = null;
    productList.isLoading = true;
    const [result, error] = await Api.get(requestParams);
    productList.products = result.products;
    productList.error = error;
    productList.isLoading = false;
  },
});
