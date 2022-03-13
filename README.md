# 네이버 쇼핑 인사이트 키워드/연령별 트렌드 조회

<img width="1358" alt="20220311_172923@2x" src="https://user-images.githubusercontent.com/8604840/157831711-72c933cc-5ff7-4796-ae27-29faacf0690f.png">

> _네이버 OPEN API에서 제공하는 키워드/연령별 트렌드 데이터를 시각화한 미니 어플리케이션입니다_

- Live Demo : https://shopping-insight.vercel.app (모바일 미지원)
- 작업 기간 : 4일 (리팩토링 / 배포 작업 기간 제외)

## 사용 스택 (프론트)

- React + TypeScript
- Redux + Saga
- Styled-Components + Ant Design
- ESLint(Airbnb 규칙 적용) + Prettier

## 구현 내역

- 네이버 OPEN API [키워드/연령별 트렌드 조회 데이터](https://bit.ly/3i5lES4) 사용
- 차트 라이브러리([Rechart](https://recharts.org/zh-CN))를 이용해 연령별 라인 차트 시각화
- 사용자가 선택한 데이터 조회 파라미터 리덕스 상태로 저장(렌더링 완료한 차트 데이터 포함)
  - (필수 / 기본값 지정) 시작/종료 날짜 : Single Date Picker
  - (필수 / 기본값 지정) 구간 단위 : 단일 선택 Form
  - (필수 / 기본값 지정) 카테고리(쇼핑 분야 코드) : 검색/선택 가능한 리스트 Form
  - (필수) 검색 키워드 : Text Input Form
  - 기기 : 단일 선택 Form
  - 성별 : 단일 선택 Form
  - 연령대 : 다중 선택 Form
- 새로고침 혹은 재접속 시 마지막으로 선택한 파라미터 내역 자동 적용 후 차트 렌더
- 필수 파라미터에 대한 유효성 검사 및 툴팁 안내 (유효성을 모두 통과해야만 검색 버튼 활성화)
  - 시작 날짜 : 2017-08-01 ~ 종료 날짜 / 오늘 날짜
  - 종료 날짜 : 2017-08-01 / 시작 날짜 ~ 오늘 날짜
  - 키워드 : 최소 1글자 이상
  - 구간 단위 / 카테고리 : 강제로 1개 선택되도록 작성
- Redux Saga 활용 비동기 처리(API 호출)

## CORS 오류 해결

- 개발 환경에선 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) 라이브러리를 이용해 Proxy를 적용할 수 있지만 배포 환경에선 지원하지 않음
- Express로 간단한 서버를 구축해(AWS EC2) 배포 환경에서 발생하는 CORS 오류 대응
  1. [클라이언트] 데이터 조회에 필요한 파라미터 정보 서버로 전송
  2. [서버] 파라미터 정보를 받아 네이버 API 요청
  3. [서버] 응답받은 데이터 클라이언트로 전송
  4. [클라이언트] 전달받은 데이터를 차트 형식에 맞도록 Mutation 후 렌더링

## 프로젝트 실행 방법(로컬 프론트 → 원격 서버)

1. **레포지토리 클론 :** `git clone https://github.com/romantech/shopping-insight.git`
2. **종속성 설치 :** `npm install`
3. **환경 변수 세팅 :** `.env` 파일명 변경 후 `BASE_URL` 변수에 `https://api-shopping-insight.romantech.net:2443` 입력
4. **프로젝트 시작 :** 터미널에서 `npm start`
