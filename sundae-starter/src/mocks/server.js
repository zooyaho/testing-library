// src/mocks/node.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
// setupServer 함수는 Node.js 환경에서 가상의 API 서버를 설정합니다. 이 서버는 정의된 핸들러들을 사용하여 HTTP 요청을 가로채고, 실제 서버와의 네트워크 통신을 대신 처리합니다.

// server는 setupServer로 설정된 가상의 API 서버를 의미합니다. 이 서버는 나중에 Jest와 같은 테스트 프레임워크에서 실행하거나 종료할 수 있습니다.
// 이 파일을 통해 정의된 server 객체는 다른 파일에서 가져와서 server.listen()을 호출하여 가상 서버를 실행하거나, server.close()를 호출하여 서버를 종료할 수 있습니다.
