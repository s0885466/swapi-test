import { getPersonDetailsLink } from './get-person-details-link';

describe('entities/person/getPersonDetailsLink', () => {
  test('should return people/1', () => {
    expect(getPersonDetailsLink(1)).toBe('people/1');
  });
});
