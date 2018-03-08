const puppeteer = require('puppeteer');
const userAgent =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.132 Chrome/63.0.3239.132 Safari/537.36';
const proxy = 'socks5://192.168.5.24:14513';

module.exports = async ({title, description, tags, createdDate, dueDate, priority}) => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [proxy, '--window-size=1100,900']
  });
  const page = await browser.newPage();
  await page.setUserAgent(userAgent);
  await page.setViewport({ width: 1100, height: 900, isLandscape: true });
  await page.goto('https://ng-bs-redux-boilerplate.herokuapp.com/todos/create');
  await page.type('input[formcontrolname=title]', title, {delay: 10});
  await page.type('input[formcontrolname=description]', description, {delay: 10});
  if (tags.length) {
    await page.select('select.select2-hidden-accessible', ...tags);
  }
  await page.type('input[formcontrolname=dateCreated]', createdDate, {delay: 10});
  await page.type('input[formcontrolname=dueDate]', dueDate, {delay: 10});
  await page.evaluate(() => new Promise((resolve) => {
    document.querySelector('input[formcontrolname=priority]').value = '';
    resolve();
  }));
  await page.type('input[formcontrolname=priority]', priority, {delay: 10});
  await page.waitFor(2500);
  await page.click('.btn.btn-primary.float-right');
  await page.waitForSelector('.btn.btn-primary.float-right', { hidden: true });
  await page.waitFor(2500);
  await browser.close();
};
