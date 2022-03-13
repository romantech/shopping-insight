const axios = require('axios');

const url =
  'https://openapi.naver.com/v1/datalab/shopping/category/keyword/age';

module.exports = {
  get: () => {},
  post: async (req, res) => {
    try {
      const { data } = await axios.post(url, req.body, {
        headers: {
          'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
        },
      });
      res.json({ ...data });
    } catch (e) {
      res.sendStatus(e.response.status)
    }
  },
  redirect: () => {},
};
