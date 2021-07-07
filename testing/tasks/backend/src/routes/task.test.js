const req = require('supertest')
const jwt = require('jsonwebtoken')
const app = require('../app')
const { connect, disconnect, cleanup } = require('../db')
const User = require('../models/user.model')

describe('task', () => {
  let token
  let user

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()

    const data = { email: 'maria@test.com', password: '12345' }
    // const res = await req(app).post('/users/signup').send(data)
    // token = res.body.token
    user = await User.create(data)
    token = jwt.sign(
      { id: user._id },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 24 * 365}
    )
  })

  afterAll(async () => {
    await disconnect()
  })

  it(
    'should create a task if data is valid and user is authenticated',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.name).toBe(task.name)
      expect(res.body.done).toBeFalsy()
      expect(res.body.user).toBe(user._id.toString())
    }
  )

  it(
    'should not create a task if name is not defined',
    async () => {
      const task = {}
      const res = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/name is required/i)
    }
  )

  it(
    'should not create a task if user is not authenticated',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app).post('/tasks/').send(task)

      expect(res.statusCode).toBe(401)
      expect(res.body.message).toMatch(/your session has expired/i)
    }
  )

  it(
    'should not create a task if token is invalid',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app).post('/tasks/').send(task).set('Authorization', 'Bearer 3e7423kjsdg.893lkjsadfg.askdgjhslad')

      expect(res.statusCode).toBe(401)
      expect(res.body.message).toMatch(/invalid token/i)
    }
  )

  it(
    'should not create a task if token is undefined',
    async () => {
      const task = { name: 'task 1' }
      const res = await req(app).post('/tasks/').send(task).set('Authorization', 'Bearer ')

      expect(res.statusCode).toBe(401)
      expect(res.body.message).toMatch(/your session has expired/i)
    }
  )

  it(
    'should show task\'s details if user is owner',
    async () => {
      const task = { name: 'task 1' }
      const { body: { _id } } = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      const res = await req(app).get(`/tasks/${_id}`).set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.name).toBe(task.name)
      expect(res.body.user).toBe(user._id.toString())
    }
  )

  it(
    'should not show task\'s details if user is not the owner',
    async () => {
      const task = { name: 'task 1' }
      const { body: { _id } } = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      const data = { email: 'martin@test.com', password: '12345' }
      const user2 = await req(app).post('/users/signup').send(data)

      const res = await req(app).get(`/tasks/${_id}`).set('Authorization', `Bearer ${user2.body.token}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/you are not allowed/i)
    }
  )

  it(
    'should update task if user is owner',
    async () => {
      const task = { name: 'task 1' }
      const { body: { _id } } = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      const res = await req(app).put(`/tasks/${_id}`).set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.name).toBe(task.name)
      expect(res.body.user).toBe(user._id.toString())
      expect(res.body.done).toBeTruthy()
    }
  )

  it(
    'should not update task if user is not the owner',
    async () => {
      const task = { name: 'task 1' }
      const { body: { _id } } = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      const data = { email: 'martin@test.com', password: '12345' }
      const user2 = await req(app).post('/users/signup').send(data)

      const res = await req(app).put(`/tasks/${_id}`).set('Authorization', `Bearer ${user2.body.token}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/you are not allowed/i)
    }
  )

  it(
    'should delete task if user is owner',
    async () => {
      const task = { name: 'task 1' }
      const { body: { _id } } = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      const res = await req(app).delete(`/tasks/${_id}`).set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.message).toMatch(/task deleted/i)
    }
  )

  it(
    'should not delete task if user is not the owner',
    async () => {
      const task = { name: 'task 1' }
      const { body: { _id } } = await req(app).post('/tasks/').send(task).set('Authorization', `Bearer ${token}`)

      const data = { email: 'martin@test.com', password: '12345' }
      const user2 = await req(app).post('/users/signup').send(data)

      const res = await req(app).delete(`/tasks/${_id}`).set('Authorization', `Bearer ${user2.body.token}`)

      expect(res.statusCode).toBe(400)
      expect(res.body.message).toMatch(/you are not allowed/i)
    }
  )
})
