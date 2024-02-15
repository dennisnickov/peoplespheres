import { isFeatured, getProductById, products } from '../products';
import { receiveProducts, createProduct, deleteProduct, updateProduct } from '../../actions/products';

describe('isFeatured', () => {
	it('is false if it is not featured', () => {
		expect(isFeatured({ rating: 1, featured: false })).toBe(false);
	});

	it('is true if rating is more than 8', () => {
		expect(isFeatured({ rating: 9 })).toBe(true);
	});

	it('is true if it is featured', () => {
		expect(isFeatured({ rating: 1, featured: true })).toBe(true);
	});
});

describe('getProductById', () => {
	it('should get product data for the correct product id', () => {
		expect(getProductById({ products: [{ id: 1, name: 'TV' }] }, 1).name).toBe('TV');
	});
});

describe('products', () => {
	it('receives products', () => {
		const data = [{ id: '1' }];

		const result = products([], receiveProducts(data));

		expect(result).toEqual(data);
	});

	it('deletes a product', () => {
		const removed = { id: '1' };

		const result = products([removed, { id: '2' }], deleteProduct(removed.id));

		expect(result).not.toContain(removed);
	});

	it('updates a product', () => {
		const data = { rating: 3 };
		const result = products([{ id: '2', rating: 1 }], updateProduct(data));

		expect(result[0].rating).toBe(1);
	});

	it('creates a product', () => {
		const data = { rating: 3 };
		const result = products([], createProduct(data));

		expect(result.length).toBe(1);
	});
});
