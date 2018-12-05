const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    // Fails (as of Chrome 71)
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',

    // Passes (as of Canary 73)
    // executablePath: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',

    // Passes (with any version)
    // headless: false
  });

  const page = await browser.newPage();
  const logPromise = new Promise(resolve => page.once('console', resolve));

  await page.goto(`file:${__dirname}/page.html`);

  console.log((await logPromise).text());

  await browser.close();
})();
