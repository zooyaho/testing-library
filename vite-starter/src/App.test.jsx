import { logRoles } from '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button flow check', () => {
  const { container } = render(<App />);
  // logRoles(container);
  const btnEl = screen.getByRole('button', { name: /blue/i }); // 버튼 존재와 문구 확인
  expect(btnEl).toHaveClass('red'); // class 확인
  fireEvent.click(btnEl); // 클릭 시뮬레이션
  expect(btnEl).toHaveTextContent(/red/i); // red 문구 확인
  expect(btnEl).toHaveClass('blue'); // class 확인
  // expect(btnEl).toHaveStyle({ 'background-color': 'blue' });
});
