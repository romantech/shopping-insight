require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const port = 4000;

const https = require('https');
const indexRouter = require('./routes/index');
const shoppingRouter = require('./routes/shopping');

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 중첩 객체 표현

app.use('/api', indexRouter);
app.use('/api/shopping', shoppingRouter);

let server;

if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app,
    )
    .listen(port);
} else {
  server = app.listen(port);
}

module.exports = server;
