import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAxiosInstance } from '../src/request';
import Header from '../src/components/Header';
import { getClientStore } from '../src/store/store';
import routes from '../App';
const axiosInstance = createAxiosInstance();
const store = getClientStore(axiosInstance);
const Page = (
  <Provider store={store}>
    <BrowserRouter>
      <Header></Header>
      {routes.map(route => (
        <Route {...route}></Route>
      ))}
    </BrowserRouter>
  </Provider>
);
// 注水 客户端入口
ReactDom.hydrate(Page, document.getElementById('app'));
