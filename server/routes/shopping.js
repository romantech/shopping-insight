const express = require('express');
const shopping = require('../controllers/shopping');

const router = express.Router();
router.post('/', shopping.post);

module.exports = router;
