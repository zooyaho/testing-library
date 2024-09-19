import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server";

import { render, screen, logRoles } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { expect } from "vitest";

// /scoops와 toppings 경로에 오는 에러 값 처리 테스트
test("handles error for scoop and toppings routes", async () => {
  // server의 handler를 override하여 에러응답으로 만들기
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return HttpResponse(null, { status: 500 });
    })
  );

  const { container } = render(<OrderEntry />);

  // success
  // const alerts = await screen.findAllByText(
  //   "An unexpected error occurred. Please try again later"
  // );
  // success
  const alerts = await screen.findAllByRole("alert");

  // fail > bootstrap의 alert는 name값이 빈 문자열로 됨.
  // const alerts = await screen.findAllByRole("alert", {
  //   name: "An unexpected error occurred. Please try again later",
  // });

  logRoles(container); // 렌더링된 결과물을 확인하여 name값이 비어있는 것을 확인할 수 있음.
  expect(alerts).toHaveLength(2);
});
