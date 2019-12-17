import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../src/components/Header';
import { getServerStore } from '../src/store/store';
import express from 'express';

import routes from '../App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = getServerStore();
  const promises = [];
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      const { loadData } = route.component;
      if (loadData) promises.push(loadData(store));
    }
    return match;
  });
  Promise.all(promises).then(() => {
    console.log(123);
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <Header></Header>
          {routes.map(route => (
            <Route {...route}></Route>
          ))}
        </StaticRouter>
      </Provider>
    );
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
          <script>window.__context=${JSON.stringify(store.getState())}</script>
          <script src="bundle.js"></script>
        </body>
      </html>
      
      `
    );
  });
});

app.listen(3004);
