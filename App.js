import React from 'react';
import { Route } from 'react-router-dom';
import Index from './src/containers/Index';
import About from './src/containers/About';
import User from './src/containers/User';

export default [
  {
    path: '/',
    component: Index,
    // exact: true,
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
  }
];
