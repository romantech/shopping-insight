import axios, { AxiosPromise, CancelTokenSource } from 'axios';

// 개발 모드에선 src/setupProxy.js - target 속성에 입력한 주소가 기본 적용됨
// axios.defaults.baseURL = isProd ? process.env.REACT_APP_BASE_URL : '';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export default {
  shoppingInsightKeywordAge: (
    payload: RequestParams,
    source?: CancelTokenSource,
  ): AxiosPromise => {
    return axios.post('/shopping-insight', payload, {
      cancelToken: source?.token,
    });
  },
};
