const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use('/games/:gameId', express.static(path.join(__dirname, '/../public')));

//app.use('/api/gameById/:gameId', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
//app.use('/api/bundlesByGameId/:gameId', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));



module.exports.app = app;
