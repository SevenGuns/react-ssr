import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';

import App from '../App';

const app = express();

app.use(express.static('public'));

app.get('/', (_, res) => {
  const content = renderToString(App);
  res.send(
    `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
    
    `
  );
});

app.listen(3004);
