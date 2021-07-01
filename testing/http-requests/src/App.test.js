import { render, cleanup, act } from '@testing-library/react';
import moxios from 'moxios'
import faker from 'faker'
import App from './App';

describe('App', () => {
  beforeEach(() => {
    moxios.install()
    cleanup()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it(
    'should render an incoming post list',
    async () => {
      const length = Math.ceil(Math.random() * 30)
      const posts = Array.from({ length }, () => {
        return {
          id: faker.datatype.uuid(),
          title: faker.animal.cat(),
          body: faker.lorem.paragraph(),
        }
      })

      const { getAllByTestId } = render(<App />)

      await moxios.wait(jest.fn)
      await act(async () => {
        const req = moxios.requests.mostRecent()

        req.respondWith({
          status: 200,
          response: posts
        })
      })

      const postElements = getAllByTestId('post')

      expect(postElements).toHaveLength(length)
    }
  )

  it(
    'should render an error if backend is down',
    async () => {
      const { getByText } = render(<App />)

      await moxios.wait(jest.fn)
      await act(async () => {
        const req = moxios.requests.mostRecent()

        req.respondWith({
          status: 500,
          response: { message: 'service unavailable' }
        })
      })

      const errorElement = getByText('Oops Something went wrong')

      expect(errorElement).toBeInTheDocument()
    }
  )
})
