import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const { container } = render(<learn react />)
  container.querySelector('.web-final')
});
