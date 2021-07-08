const puppeteer = require('puppeteer')

// IIFE - Immediately Invoke Function Expression
// (async () => {
//   const browser = await puppeteer.launch()

// })()
async function app() {
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()

  await page.goto('https://google.com')

  await page.waitForSelector('input.gLFyf.gsfi')
  await page.type('input.gLFyf.gsfi', 'hola mundo', { delay: 100 })

  await page.click('div.o3j99.n1xJcf.Ne6nSd')
  await page.click('div.FPdoLc.lJ9FBc input.gNO89b')

  await page.waitForSelector('h3.LC20lb.DKV0Md')
  await page.screenshot({ path: './screenshot.png' })

  // await page.close()
  await browser.close()
}

app()
