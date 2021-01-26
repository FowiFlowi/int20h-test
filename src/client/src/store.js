import { store } from '@risingstack/react-easy-state';
import Api from './utils/apiClient';
import { makeid } from './utils/hash';

function mapToEntity(product) {
  return { ...product, uuid: makeid(5) };
}

export const uiStore = store({
  isLoading: false,
  error: null,
  isOpenModal: false,

  toggleModal() {
    uiStore.isOpenModal = !uiStore.isOpenModal;
  }
});

export const productsStore = store({
  products: null,
  prices: null,
  searchParams: {
    search: '',
    sort: 1,
    weight: '',
  },
  async loadProducts() {
    const { searchParams } = productsStore;
    const requestParams = {
      path: '/products',
      fallbackResponse: { products: null },
      queryParams: {
        ...(searchParams.search && { search: searchParams.search }),
        ...(searchParams.sort && { sort: searchParams.sort }),
        ...(searchParams.weight && { weight: searchParams.weight }),
      },
    };

    productsStore.products = null;
    uiStore.isLoading = true;
    const [result, error] = await Api.get(requestParams);
    productsStore.products = result.products && result.products.map(mapToEntity);
    uiStore.error = error;
    uiStore.isLoading = false;
  },
  async loadProductsPrice() {
    const requestParams = {
      path: '/product/prices',
      fallbackResponse: {prices: null},
    }
    uiStore.isLoading = true;
    const [result, error] = await Api.get(requestParams);
    productsStore.prices = result.prices
    uiStore.error = error;
    uiStore.isLoading = false;
  },
  getProductById(id) {
    if (productsStore.products === null) {
      return null;
    }
    return productsStore.products.find((product) => product.uuid === id);
  },
  setSearchParam(param, value) {
    productsStore.searchParams[param] = value;
  }
});
