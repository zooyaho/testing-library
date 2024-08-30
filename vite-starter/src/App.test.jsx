import { logRoles } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('button > 올바른 색상과 문구인지 체크', () => {
  const { container } = render(<App />);
  logRoles(container);
  const btnEl = screen.getByRole('button', { name: /blue/i });
  expect(btnEl).toHaveClass('red');
});
