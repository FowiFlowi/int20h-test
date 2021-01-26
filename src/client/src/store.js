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
    uiStore = !uiStore.isOpenModal;
  }
});

export const productList = store({
  products: null,
  searchParams: {
    search: '',
    sort: 1,
    weight: '',
  },
  async loadProducts() {
    const { searchParams } = productList;
    const requestParams = {
      path: '/products',
      fallbackResponse: { products: null },
      queryParams: {
        ...(searchParams.search && { search: searchParams.search }),
        ...(searchParams.sort && { sort: searchParams.sort }),
        ...(searchParams.weight && { weight: searchParams.weight }),
      },
    };

    productList.products = null;
    uiStore.isLoading = true;
    const [result, error] = await Api.get(requestParams);
    productList.products = result.products && result.products.map(mapToEntity);
    uiStore.error = error;
    uiStore.isLoading = false;
  },
  getProductById(id) {
    if (productList.products === null) {
      return null;
    }
    return productList.products.find((product) => product.uuid === id);
  },
  setSearchParam(param, value) {
    productList.searchParams[param] = value;
  }
});
