import axios, { AxiosPromise, CancelTokenSource } from 'axios';
import { isProd } from './utils';

/** 배포 환경에선 람다 서버를 통해서 데이터 조회 */
const prodInstance = axios.create({
  baseURL: process.env.REACT_APP_LAMDA_BASE_URL,
  timeout: 3000,
});

/**
 * 개발 환경에선 Proxy 이용해서 네이버 API 로 직접 요청
 * src/setupProxy.js - target 속성에 입력한 주소가 기본 적용됨
 * */
const devInstance = axios.create({
  headers: {
    'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
  },
});

const instance = isProd ? prodInstance : devInstance;
const url = isProd ? '/shopping-insight' : '/shopping/category/keyword/age';

export default {
  getShoppingDataByKeywordAge: (
    payload: RequestParams,
    source?: CancelTokenSource,
  ): AxiosPromise => {
    return instance.post(url, payload, {
      cancelToken: source?.token,
    });
  },
};
