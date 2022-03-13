# 아이겐코리아 프론트엔드 사전과제
<img width="1358" alt="20220311_172923@2x" src="https://user-images.githubusercontent.com/8604840/157831711-72c933cc-5ff7-4796-ae27-29faacf0690f.png">


## 지원자 정보
- 이름 : 장요한
- 직무 : 프론트엔드(주니어)
- 이메일 : ismedusa@gmail.com


## 프로젝트 실행 방법
1. **레포지토리 클론 :** 터미널에서 `git clone https://github.com/romantech/shopping-insight-graph.git` 입력
2. **종속성 설치 :** 터미널에서 `npm install` 입력
3. **환경 변수 세팅 :** `.env.example` 파일 이름을 `.env` 으로 변경 후 네이버 오픈 API의 ID/SECRET 입력(본인 계정)
4. **프로젝트 시작 :** 터미널에서 `npm start`


## 사용 스택
- React + TypeScript
- Redux + Saga
- Styled-Components + Ant Design
- ESLint(Airbnb 규칙 적용) + Prettier


## 필수 구현
- ✅ 쇼핑 인사이트 - 키워드 연령별 트렌드 조회 데이터 사용
- ✅ 연령별 트렌드 조회 파라미터를 사용자가 입력할 수 있도록 작성
- ✅ API Key는 환경 변수에 저장
- ✅ CORS 오류 해결
  - [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) 라이브러리를 이용해 Proxy 추가
  - React Script 5.0은 package.json 프록시 추가하면 오류 발생(참고 [링크](https://github.com/facebook/create-react-app/issues/11762))
- ✅ 차트 라이브러리([Rechart](https://recharts.org/en-US/))를 이용해 데이터 시각화
- ✅ 연령 옵션 다중 선택 구현


## 선택 구현
- ✅ Antd 활용
- ✅ Redux-Saga 비동기 처리(API 호출)
- ✅ Redux-Persist 활용(검색 파라미터 및 조회 결과 데이터 로컬스토리에 저장)
- ❌ Custom Hook 활용(`useDebounce` 훅만 추가해놓고 사용하지는 않음)
