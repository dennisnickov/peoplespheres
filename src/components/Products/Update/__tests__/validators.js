import { isNameValid, isCategoriesValid, isExpirationDateValid } from '../validators';
import { DAY } from '../../../../utils';

describe('isNameValid', () => {
	it('checks whether a name is entered', () => {
		const value = 'John';
		expect(isNameValid(value)).toBe(true);
	});

	it('checks whether the name is under 200 characters', () => {
		const value = '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
		expect(isNameValid(value)).toBe(false);
	});
});

describe('isCategoriesValid', () => {
	it('checks whether categories are selected', () => {
		const value = [1, 2, 3];
		expect(isCategoriesValid(value)).toBe(true);
	});

	it('checks that no more than 5 categories are selected', () => {
		const value = [1, 2, 3, 4, 5, 6];
		expect(isCategoriesValid(value)).toBe(false);
	});
});

describe('isExpirationDateValid', () => {
	it('returns true if no date is entered', () => {
		const value = null;
		expect(isExpirationDateValid(value)).toBe(true);
	});

	it('checks whether the expiration date is at least 30 days in the future', () => {
		const value = new Date().getTime() + (29 * DAY);
		expect(isExpirationDateValid(value)).toBe(false);
	});
});
