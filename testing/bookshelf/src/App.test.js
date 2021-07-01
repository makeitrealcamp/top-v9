import { render, cleanup, fireEvent } from '@testing-library/react'
import faker from 'faker'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    cleanup()
  })

  it(
    'should render books after submiting form with title and description values',
    () => {
      const length = Math.ceil(Math.random() * 20)

      const booksMock = Array.from({ length }, () => {
        return {
          title: faker.name.firstName(),
          description: faker.lorem.paragraph(),
        }
      })

      const { getByLabelText, getByText, getByTestId, getAllByTestId } = render(<App />)

      const textElement = getByText('No books created!')
      expect(textElement).toBeInTheDocument()

      const titleInput = getByLabelText(/title/i)
      const descriptionInput = getByLabelText(/description/i)
      const formElement = getByTestId('form')

      booksMock.forEach(bookMock => {
        fireEvent.change(titleInput, { target: { value: bookMock.title, name: 'title' } })
        fireEvent.change(descriptionInput, { target: { value: bookMock.description, name: 'description' } })
        fireEvent.submit(formElement)
      })

      expect(titleInput.value).toBe('')
      expect(descriptionInput.value).toBe('')
      expect(getAllByTestId('book')).toHaveLength(length)
    }
  )
})
