import { render, screen } from '@testing-library/react';
import MiApp from './MiApp';

test('renders learn react link', () => {
  render(<MiApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
