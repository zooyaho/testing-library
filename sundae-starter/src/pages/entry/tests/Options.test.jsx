import { render, screen } from "@testing-library/react";

import Options from "../options";

/* test 목표 > 서버가 반환한 옵션 값에 해당하는 이미지가 표시되는지 테스트 */

// 서버가 반환한 아이스크림 종류별로 이미지 표시
test("display image for each scoop option from server", async () => {
  render(<Options optionType={"scoops"} />);

  // 이미지 찾기
  // 모든 이미지의 alt값의 끝이 scoop이란 문자열로 끝나는 것으로 정의
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2); // 2개의 이미지 데이터 확인

  // 모든 이미지의 alt텍스트를 map에 저장
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

// 서버가 반환한 토핑 종류별로 이미지 표시
test("display image for each topping option from server", async () => {
  render(<Options optionType={"toppings"} />);

  // 이미지 찾기
  // 모든 이미지의 alt값의 끝이 scoop이란 문자열로 끝나는 것으로 정의
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3); // 2개의 이미지 데이터 확인

  // 모든 이미지의 alt텍스트를 map에 저장
  const altText = toppingImages.map((el) => el.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
