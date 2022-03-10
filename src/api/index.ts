import axios, { AxiosPromise, CancelTokenSource } from 'axios';

axios.defaults.baseURL = 'v1/datalab/';
axios.defaults.headers.common['X-Naver-Client-Id'] =
  process.env.REACT_APP_CLIENT_ID;
axios.defaults.headers.common['X-Naver-Client-Secret'] =
  process.env.REACT_APP_CLIENT_SECRET;

export default {
  shoppingInsightKeywordAge: (
    payload: RequestParams,
    source?: CancelTokenSource,
  ): AxiosPromise => {
    return axios.post('shopping/category/keyword/age', payload, {
      cancelToken: source?.token,
    });
  },
};
