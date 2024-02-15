import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import { deleteProduct } from '../../actions/products';
import { getCategoriesById } from '../../reducers/categories';

export default function ProductsContainer() {
  const categoriesById = useSelector((state) => getCategoriesById(state));
  const products = useSelector((state) => state.products.map(product => {
    const categories = product.categories.map(id => categoriesById[id])

    return {
      ...product,
      categories
    };
  }));

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Header name="Products" />
      <ProductsList products={products} onDelete={(id) => dispatch(deleteProduct(id))} />
    </Fragment>
  );
}
