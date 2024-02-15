import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductForm from '../Update/ProductForm';
import { createProductForm } from '../../../actions/products';
import { isFeatured } from '../../../reducers/products';

export default function AddFormContainer() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onSave={(data) => dispatch(createProductForm({
                    ...data, featured: isFeatured(data)
                }))}
                categories={categories}
            />
        </>
    );
}
