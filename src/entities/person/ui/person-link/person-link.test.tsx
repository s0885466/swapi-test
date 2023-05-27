import { PersonLink } from './person-link';
import { render, screen } from '@testing-library/react';

describe('entities/person/PersonLink', () => {
  test('should render', async () => {
    render(<PersonLink name="Sasha" personId={1} />);

    const link = screen.getByTestId('PersonLink');

    expect(link.tagName).toBe('A');
    expect(link).toHaveTextContent('Sasha');
    expect(link).toHaveAttribute('aria-label', 'link to Sasha');
    expect(link).toHaveAttribute('href', 'people/1');
  });
});
