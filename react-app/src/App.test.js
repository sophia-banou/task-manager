import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Manager heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task Manager/i);
  expect(linkElement).toBeInTheDocument();
});
