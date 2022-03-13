const axios = require('axios');

module.exports = {
  get: (req, res) => {},
  post: (req, res) => {
    console.log(req);
    axios
      .post(
        'https://openapi.naver.com/v1/datalab/shopping/category/keyword/age',
        {
          startDate: '2022-03-01',
          endDate: '2022-03-12',
          timeUnit: 'date',
          category: '50000003',
          keyword: '아이폰',
        },
        {
          headers: {
            'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
          },
        },
      )
      .then(response => {
        console.log(response);
        res.sendStatus(200).json({ data: response.data });
      });
  },
  redirect: () => {},
};
