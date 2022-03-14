const axios = require('axios');

const checkValidParams = params => {
  // 클라이언트에서 유효성을 통과했을 때만 요청을 보내오지만 혹시 몰라서 다시 검사
  const requiredParamKeys = [
    'startDate',
    'endDate',
    'category',
    'keyword',
    'timeUnit',
  ];
  return requiredParamKeys.every(p => params[p].length > 0);
};

const shoppingInstance = axios.create({
  baseURL: `${process.env.NAVER_API_BASE_URL}/datalab/shopping`,
  headers: {
    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
  },
  timeout: 3000, // 3초간 응답 없으면 요청 종료 후 catch 문으로 에러 전달
});

module.exports = {
  checkValidParams,
  shoppingInstance,
};
