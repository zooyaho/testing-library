import { logRoles } from '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';

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

/**
 * flow: checkbox 상태에 따른 버튼 비활성화 상태 관리
 */
test('checkbox flow check', () => {
  render(<App />);
  const btnEl = screen.getByRole('button', { name: /blue/i });
  const checkBoxEl = screen.getByRole('checkbox', { name: /disable button/i });

  // 초기 상태 확인
  expect(btnEl).toBeEnabled();
  expect(checkBoxEl).not.toBeChecked(); // 선택되지 않은 체크박스 상태

  fireEvent.click(checkBoxEl);
  expect(btnEl).toBeDisabled(); // 버튼 비활성화되었는지 체크
  expect(btnEl).toHaveClass('gray'); // class 확인

  fireEvent.click(checkBoxEl);
  expect(btnEl).toBeEnabled();
});
