import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import {
  getTasks,
  createTask,
  completeTask,
  GET_TASKS,
  CREATE_TASK,
  COMPLETE_TASK,
} from './actions'
import {
  initialState,
  tasksReducer,
} from '.'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const tasksMock = [
  { _id: '3129874asdhdg2342', name: 'task 1', done: false },
  { _id: '378129387534fsdkj', name: 'task 2', done: true },
  { _id: '38297sagheryu3984', name: 'task 3', done: false },
]

describe('tasksReducer', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it(
    'should request tasks and dispatch GET_TASKS action with response payload',
    async () => {
      const store = mockStore()

      getTasks()(store.dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
        response: tasksMock,
      })

      const actions = store.getActions()

      expect(actions[0].type).toBe(GET_TASKS)
      expect(actions[0].payload).toHaveLength(3)
      expect(actions[0].payload).toMatchObject(tasksMock)
    }
  )

  it(
    'should create task and dispatch CREATE_TASK action with payload message',
    async () => {
      const { dispatch, getActions } = mockStore()

      createTask({ name: 'title 1' })(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200
      })

      const [action] = getActions()

      expect(action.type).toBe(CREATE_TASK)
      expect(action.payload).toMatch(/task created successfully/i)
    }
  )

  it(
    'should complete task and dispatch COMPLETE_TASK with response payload',
    async () => {
      const { dispatch, getActions } = mockStore()

      completeTask('asdtioweutlk')(dispatch)

      await moxios.wait(jest.fn)
      const req = moxios.requests.mostRecent()
      await req.respondWith({
        status: 200,
        response: tasksMock[0]
      })

      const [action] = getActions()

      expect(action.type).toBe(COMPLETE_TASK)
      expect(action.payload).toMatchObject(tasksMock[0])
    }
  )

  it(
    'should change tasks state when action GET_TASKS is dispatched',
    () => {
      const state = tasksReducer(undefined, { type: GET_TASKS, payload: tasksMock })

      expect(state).toMatchObject({ ...initialState, tasks: tasksMock })
    }
  )

  it(
    'should reset name and set message when action CREATE_TASK is dispatched',
    () => {
      const state = tasksReducer(
        { ...initialState, name: 'tarea 1' },
        { type: CREATE_TASK, payload: 'message' }
      )

      expect(state).toMatchObject({ ...initialState, name: '', message: 'message' })
    }
  )
})
