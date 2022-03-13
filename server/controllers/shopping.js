const { shoppingInstance, checkValidParams} = require("../model");

module.exports = {
  get: () => {},
  post: async (req, res) => {
    try {
      if (!checkValidParams(req.body)) return res.status(404).send('잘못된 요청입니다');

      const { data } = await shoppingInstance.post('/category/keyword/age', req.body);
      res.json({ ...data });
    } catch (e) {
      res.sendStatus(e.response.status)
    }
  },
  redirect: () => {},
};
