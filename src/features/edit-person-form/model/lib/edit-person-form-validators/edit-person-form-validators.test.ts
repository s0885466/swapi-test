import { nameValidator, genderValidator } from './edit-person-form-validators';
import {
  GENDER_FIELD_ERROR_MESSAGE,
  NAME_FIELD_ERROR_MESSAGE,
} from '../../constants/constants';

describe('features/edit-person-form/nameValidator', () => {
  test('should return undefined if name has at least 4 characters', () => {
    expect(nameValidator('Oleg')).toBe(undefined);
  });

  test('should return error if name has not at least 4 characters', () => {
    expect(nameValidator('Ira')).toBe(NAME_FIELD_ERROR_MESSAGE);
  });

  test('should return error if name has not at least 4 characters(except spaces)', () => {
    expect(nameValidator('Ira   ')).toBe(NAME_FIELD_ERROR_MESSAGE);
  });
});

describe('features/edit-person-form/genderValidator', () => {
  test('should return undefined if gender = male', () => {
    expect(genderValidator('male')).toBe(undefined);
  });
  test('should return undefined if gender = female', () => {
    expect(genderValidator('female')).toBe(undefined);
  });
  test('should return undefined if gender = n/a', () => {
    expect(genderValidator('n/a')).toBe(undefined);
  });
  test('should return error if gender is not equal one of GENDER_VALUES', () => {
    expect(genderValidator('hello')).toBe(GENDER_FIELD_ERROR_MESSAGE);
  });
});
