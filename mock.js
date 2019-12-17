const express = require('express');
const app = express();

app.get('/api/course/list', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Content-Type', 'Application/json;charset=utf-8');
  res.json({
    code: '0',
    list: [
      {
        title: '标题1',
        name: '加油1',
        id: '1'
      },
      {
        title: '标题2',
        name: '加油2',
        id: '2'
      },
      {
        title: '标题3',
        name: '加油3',
        id: '3'
      },
      {
        title: '标题4',
        name: '加油4',
        id: '4'
      }
    ]
  });
});

app.get('/api/user/info', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Content-Type', 'Application/json;charset=utf-8');
  res.json({
    code: '0',
    data: {
      title: '开课吧',
      name: '马云'
    }
  });
});

app.listen(9090, () => {
  console.log('mock启动完毕');
});
