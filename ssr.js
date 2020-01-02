const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
app.get('/favicon.ico', (req, res) => {
  res.json({ code: 0 });
});
const cacheUrl = {};
app.get('*', async (req, res) => {
  if (cacheUrl[req.url]) {
    res.send(cacheUrl[req.url]);
    return;
  }
  const url = `http://localhost:3004${req.url}?_mode=csr`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });
  const html = await page.content();
  await browser.close();
  cacheUrl[req.url] = html;
  res.send(html);
});
app.listen(3006, () => {
  console.log('ssr start');
});
