import products from '../mocks/products';

export class ProductApi {
  getProducts = () => {
    return products;
  }
};

export const productApi = new ProductApi();
