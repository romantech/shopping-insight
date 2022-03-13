import axios, { AxiosPromise, CancelTokenSource } from 'axios';
import { isProd } from 'lib/utils';

axios.defaults.baseURL = isProd ? process.env.REACT_APP_BASE_URL : '';
// axios.defaults.headers.common['X-Naver-Client-Id'] =
//   process.env.REACT_APP_CLIENT_ID;
// axios.defaults.headers.common['X-Naver-Client-Secret'] =
//   process.env.REACT_APP_CLIENT_SECRET;
console.log(process.env.REACT_APP_BASE_URL);

export default {
  shoppingInsightKeywordAge: (
    payload: RequestParams,
    source?: CancelTokenSource,
  ): AxiosPromise => {
    return axios.post('/api/shopping', payload, {
      cancelToken: source?.token,
    });
  },
};
