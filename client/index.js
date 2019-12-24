import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import Header from '../src/components/Header';
import { getClientStore } from '../src/store/store';
import routes from '../src/App.js';
const axiosInstance = axios.create({});
const store = getClientStore(axiosInstance);
const Page = (
  <Provider store={store}>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        {routes.map(route => (
          <Route {...route}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  </Provider>
);
if (window.__context) {
  // 注水 客户端入口
  ReactDom.hydrate(Page, document.getElementById('app'));
  // 处理csr降级
} else {
  ReactDom.render(Page, document.getElementById('app'));
}
