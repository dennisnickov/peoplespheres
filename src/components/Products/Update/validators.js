import { DAY } from '../../../utils';

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
};

export const isExpirationDateValid = (value) => {
	if (!value) return true;

	const timestampMinimum = new Date().getTime() + (30 * DAY);
	const timestampSelected = new Date(value).getTime();

	return timestampSelected > timestampMinimum;
};
