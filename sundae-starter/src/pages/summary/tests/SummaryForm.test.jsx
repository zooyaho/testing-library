import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import { expect } from 'vitest';

/* 초기 상태 테스트 flow */
test('Initial conditions', () => {
  render(<SummaryForm />);

  // checkbox 초기 상태: false
  const checkboxEl = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkboxEl).not.toBeChecked();

  // submit 버튼 초기 disabled 상태: true
  const confirmBtnEl = screen.getByRole('button', {
    name: /confirm order/i,
  });
  expect(confirmBtnEl).toBeDisabled();
});

/* checkbox 체크 시 버튼 활성화 상태 체크 테스트 */
test('Checkbox disables button on first click and enables on second click', () => {
  render(<SummaryForm />);

  const checkboxEl = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmBtnEl = screen.getByRole('button', {
    name: /confirm order/i,
  });

  fireEvent.click(checkboxEl);
  expect(confirmBtnEl).toBeEnabled();

  fireEvent.click(checkboxEl);
  expect(confirmBtnEl).toBeDisabled();
});
