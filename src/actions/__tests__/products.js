import {
	CREATE_PRODUCT,
	createProductForm,
	UPDATE_PRODUCT,
	updateProductForm,
	REQUEST_PRODUCTS,
	RECEIVE_PRODUCTS,
	fetchProducts
} from '../products';
import { productApi } from '../../gateways/ProductApi';

describe('products', () => {
	let dispatch;
	const history = {};
	const deps = { history };

	describe('fetchProducts', () => {
		it('fetches products', () => {
			dispatch = jest.fn();
			const data = [{ id: 1 }];
			const spy = jest.spyOn(productApi, 'getProducts');
			spy.mockReturnValue(data);

			fetchProducts()(dispatch);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_PRODUCTS);
			expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_PRODUCTS);
			expect(dispatch.mock.calls[1][0].products).toEqual(data);
		});
	});

	describe('updateProductForm', () => {
		beforeEach(() => {
			dispatch = jest.fn();
			history.push = jest.fn();
		});

		it('updates a product', () => {
			const data = { name: 'iphone' };
			updateProductForm(data)(dispatch, undefined, deps);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(UPDATE_PRODUCT);
			expect(dispatch.mock.calls[0][0].data).toBe(data);
		});

		it('redirects to home page', () => {
			updateProductForm({})(dispatch, undefined, deps);

			expect(history.push).toHaveBeenCalled();
			expect(history.push.mock.calls[0][0]).toBe('/');
		});
	});

	describe('createProductForm', () => {
		beforeEach(() => {
			dispatch = jest.fn();
			history.push = jest.fn();
		});

		it('creates a product', () => {
			const data = { name: 'iphone' };
			createProductForm(data)(dispatch, undefined, deps);

			expect(dispatch).toHaveBeenCalled();
			expect(dispatch.mock.calls[0][0].type).toBe(CREATE_PRODUCT);
			expect(dispatch.mock.calls[0][0].data).toBe(data);
		});

		it('redirects to home page', () => {
			createProductForm({})(dispatch, undefined, deps);

			expect(history.push).toHaveBeenCalled();
			expect(history.push.mock.calls[0][0]).toBe('/');
		});
	});
});
