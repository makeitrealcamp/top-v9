const req = require('supertest')
const app = require('../app')
const User = require('../models/user.model')
const { connect, disconnect, cleanup } = require('../db')

describe('user', () => {
  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnect()
  })

  it('should register a user successfully', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.body.token).toMatch(/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/)
  })

  it('should not create user if email is not defined', async () => {
    const user = { password: '12345' }

    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toMatch(/email is required/i)
  })

  it('should not create user if email is not valid', async () => {
    const user = { email: 'invalid', password: '12345' }

    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email is not valid/i)
  })

  it('should not create user if email is already in use', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    // await User.create(user)
    await req(app).post('/users/signup').send(user)
    const res = await req(app).post('/users/signup').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/email already exists/i)
  })

  it('should login a user successfully', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    // await User.create(user)
    await req(app).post('/users/signup').send(user)
    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    expect(res.body.token).toMatch(/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/)
  })

  it('should not login a user if email does not exist', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    const res = await req(app).post('/users/signin').send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid email or password/i)
  })

  it('should not login a user if passwords do not match', async () => {
    const user = { email: 'maria@test.com', password: '12345' }

    // await User.create(user)
    await req(app).post('/users/signup').send(user)
    const res = await req(app).post('/users/signin').send({ ...user, password: '2345' })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/invalid email or password/i)
  })
})
