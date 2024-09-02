import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

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
test('Checkbox disables button on first click and enables on second click', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkboxEl = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmBtnEl = screen.getByRole('button', {
    name: /confirm order/i,
  });

  await user.click(checkboxEl);
  expect(confirmBtnEl).toBeEnabled();

  await user.click(checkboxEl);
  expect(confirmBtnEl).toBeDisabled();
});

/* popover의 활성화/비활성화 flow 테스트 */
test('popover responds to hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover 초기 상태 비활성화
  const nullPopoverEl = screen.queryByText(
    /no ice cream will actually be delivered/i,
  );
  expect(nullPopoverEl).not.toBeInTheDocument();

  // 체크박스 라벨 hover 시 popover 활성화
  const checkboxLabelEl = screen.getByText(/terms and conditions/i);
  await user.hover(checkboxLabelEl);
  const popoverEl = screen.getByText(
    /no ice cream will actually be delivered/i,
  );
  expect(popoverEl).toBeInTheDocument();

  // mouse out 시 popover 비활성화
  await user.unhover(checkboxLabelEl);
  expect(popoverEl).not.toBeInTheDocument();
});
