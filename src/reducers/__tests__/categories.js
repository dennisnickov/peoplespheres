import { getCategoriesById, categories } from '../categories';
import { receiveCategories } from '../../actions/categories';

describe('getCategoriesById', () => {
	it('should get category data for the correct category id', () => {
		const data = { id: 1, name: 'TV' };

		expect(getCategoriesById({ categories: [data] })).toEqual({ [data.id]: data });
	});
});

describe('categories', () => {
	it('receives categories', () => {
		const data = [{ id: '1' }];

		const result = categories([], receiveCategories(data));

		expect(result).toEqual(data);
	});
});
