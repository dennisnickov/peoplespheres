import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductById } from '../../../reducers/products';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';
import { updateProductForm } from '../../../actions/products';
import { isFeatured } from '../../../reducers/products';

export default function UpdateFormContainer({ productId }) {
    const dispatch = useDispatch();
    const product = useSelector(state => getProductById(state, productId));
    const categories = useSelector(state => state.categories);

    if (!product) {
        return null;
    }

    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onSave={(data) => dispatch(updateProductForm({
                    ...data, id: productId, featured: isFeatured(data)
                }))}
                product={product}
                categories={categories}
            />
        </>
    );
}

UpdateFormContainer.propTypes = {
    productId: PropTypes.number.isRequired,
};
