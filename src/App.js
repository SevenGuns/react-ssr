import React from 'react';
import { Route } from 'react-router-dom';
import Index from './containers/Index';
import About from './containers/About';
import User from './containers/User';
import Notfound from './containers/Notfound';
import './App.css';

export default [
  {
    path: '/',
    component: Index,
    exact: true,
    key: 'index'
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'about'
  },
  {
    path: '/user',
    component: User,
    exact: true,
    key: 'user'
  },
  {
    component: Notfound,
    exact: true,
    key: 'notfount'
  }
];
