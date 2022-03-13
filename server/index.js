require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT;

const corsOptions = {
  origin: ['https://shopping-insight.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true, // Access-Control-Allow-Origin: true 와 동일
  optionsSuccessStatus: 204,
};

const http = require('http');
const https = require('https');
const indexRouter = require('./routes/index');
const shoppingRouter = require('./routes/shopping');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // 중첩 객체 표현

app.use('/api', indexRouter);
app.use('/api/shopping', shoppingRouter);

const options = isProd
  ? {
    ca: fs.readFileSync(`${process.env.CERT_PATH}/fullchain.pem`),
    key: fs.readFileSync(`${process.env.CERT_PATH}/privkey.pem`,),
    cert: fs.readFileSync(`${process.env.CERT_PATH}/cert.pem`,),
  }
  : null;

const server = options
  ? https.createServer(options, app)
  : http.createServer(app);

server.listen(port, () => console.log(`server is running on port ${port}`));

module.exports = server;
