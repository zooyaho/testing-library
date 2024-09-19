import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// 모든 테스트가 실행되기 전에 모킹 서버(Mock Server)를 시작하는 역할
beforeAll(() => server.listen());
// 테스트간에 핸들러를 리셋
afterEach(() => server.resetHandlers());
// 모든 테스트가 실행되고 난후 모킹 서버(Mock Server)를 끝내는 역할
afterAll(() => server.close());
