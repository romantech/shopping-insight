import axios, { type AxiosPromise, type CancelTokenSource } from 'axios';
import { isProd } from './utils';

/** 배포 환경에선 람다 서버를 통해서 데이터 조회 */
const prodInstance = axios.create({
  baseURL: import.meta.env.VITE_LAMBDA_BASE_URL,
  timeout: 3000,
  headers: { 'x-api-key': import.meta.env.VITE_LAMBDA_API_KEY },
});

/**
 * 개발 환경에선 Proxy 이용해서 네이버 API 로 직접 요청
 * vite.config.ts - server.proxy 에 입력한 target 주소가 기본 적용됨
 * */
const devInstance = axios.create({
  headers: {
    'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
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
