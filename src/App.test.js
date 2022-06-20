import { render, screen } from '@testing-library/react';
import App from './App';

test('renders settings section', () => {
  render(<App />);
  const linkElement = screen.getByText("Settings");
  expect(linkElement).toBeInTheDocument();
});
