import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES, fetchCategories } from '../categories';
import { categoryApi } from '../../gateways/CategoryApi';

describe('fetchCategories', () => {
	it('fetches categories', () => {
		const dispatch = jest.fn();
		const data = [{ id: 1 }];
		const spy = jest.spyOn(categoryApi, 'getCategories');
		spy.mockReturnValue(data);

		fetchCategories()(dispatch);

		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toBe(REQUEST_CATEGORIES);
		expect(dispatch.mock.calls[1][0].type).toBe(RECEIVE_CATEGORIES);
		expect(dispatch.mock.calls[1][0].categories).toEqual(data);
	});
});
