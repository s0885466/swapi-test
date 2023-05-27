import { PersonLinkList } from './person-link-list';
import { render, screen } from '@testing-library/react';
import { NO_PERSON_MESSAGE } from 'entities/person/model/constants/constants';
import { createMockPeople } from './person-link-list.mocks';

describe('entities/person/PersonLinkList', () => {
  test('should render NO_PERSON_MESSAGE if people is empty', async () => {
    render(<PersonLinkList people={[]} isLoading={false} />);

    const message = screen.getByTestId('noPersonMessage');

    expect(message).toHaveTextContent(NO_PERSON_MESSAGE);
  });

  test('should render skeletons if isLoading = true', async () => {
    render(<PersonLinkList people={undefined} isLoading={true} />);

    const skeletons = screen.getAllByTestId('PersonLinkSkeleton');

    expect(skeletons).toHaveLength(10);
  });

  test('should render person-links if isLoading = false and people is not empty', async () => {
    const number = 5;
    const people = createMockPeople(number);

    render(<PersonLinkList people={people} isLoading={false} />);

    const personLinks = screen.getAllByTestId('PersonLink');

    expect(personLinks).toHaveLength(number);
  });
});
