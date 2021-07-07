const req = require('supertest')
const app = require('./app')
const { connect, disconnect } = require('./db')

describe('app', () => {
  beforeAll(async () => {
    await connect()
  })

  afterAll(async () => {
    await disconnect()
  })

  it(
    'should GET / with success code and hello world message',
    async () => {
      const res = await req(app).get('/')

      expect(res.statusCode).toBe(200)
      expect(res.text).toMatch(/hello world/i)
    }
  )
})
