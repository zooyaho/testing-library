import { logRoles } from '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, expect } from 'vitest';
import { kebabCaseToTitleCase } from './helpers';

test('button flow check', () => {
  const { container } = render(<App />);
  // logRoles(container);
  const btnEl = screen.getByRole('button', { name: /blue/i }); // 버튼 존재와 문구 확인
  expect(btnEl).toHaveClass('medium-violet-red'); // class 확인
  fireEvent.click(btnEl); // 클릭 시뮬레이션
  expect(btnEl).toHaveTextContent(/red/i); // red 문구 확인
  expect(btnEl).toHaveClass('midnight-blue'); // class 확인
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

describe('kebabCaseToTitleCase', () => {
  test('문구에 하이픈 없을 경우', () => {
    expect(kebabCaseToTitleCase('red').toBe('red'));
  });
  test('문구에 하이픈이 하나만 있는지 체크', () => {
    expect(kebabCaseToTitleCase('midnight-blue').toBe('Midnight Blue'));
  });
  test('문구에 하이픈이 두개 이상 있는지 체크', () => {
    expect(kebabCaseToTitleCase('medium-violet-red').toBe('Medium Violet Red'));
  });
});
