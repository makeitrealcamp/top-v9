import puppeteer from 'puppeteer'

describe('App', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch()
  })

  afterAll(async () => {
    await browser.close()
  })

  it(
    'should login user and redirect to tasks view',
    async () => {
      const userMock = { email: 'maria@test.com', password: '12345' }
      const page = await browser.newPage()

      await page.goto('http://localhost:3000')

      await page.waitForSelector('input#email')

      await page.type('input#email', userMock.email, { delay: 100 })
      await page.type('input#password', userMock.password, { delay: 100 })
      await page.click('button[data-testid="signup"]')

      await page.waitForSelector('div.tasks')

      // Element - DOM
      const title = await page.$eval('div.tasks > h1', el => el.innerHTML)
      const paragraph = await page.$eval('div.tasks > p', el => el.innerHTML)

      expect(title).toMatch(/tasks/i)
      expect(paragraph).toMatch(/no tasks created yet/i)

      await page.close()

    }
  )

  it(
    'should create task if user is logged',
    async () => {
      const taskMock = { title: 'task 1' }

      const page = await browser.newPage()
      await page.goto('http://localhost:3000/create')

      await page.waitForSelector('input#name')
      await page.type('input#name', taskMock.title, { delay: 100 })
      await page.click('input#name ~ button')

      await page.waitForSelector('.success-message')
      const message = await page.$eval('.success-message', el => el.innerHTML)

      expect(message).toMatch(/task created successfully/i)

      await page.click('a[href="/"]')

      await page.waitForSelector('div.task')
      const task = await page.$eval('div.task > h2', el => el.innerHTML)
      let status = await page.$eval('div.task > p', el => el.innerHTML)

      expect(task).toBe(taskMock.title)
      expect(status).toMatch(/uncompleted/i)

      await page.click('div.task > button[data-testid="task-complete"]')
      status = await page.$eval('div.task > p', el => el.innerHTML)

      expect(status).toMatch(/completed/i)

      await page.click('div.task > button[data-testid="task-delete"]')
      await page.close()
    }
  )
})
