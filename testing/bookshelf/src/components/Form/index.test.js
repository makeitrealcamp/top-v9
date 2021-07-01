import { render, cleanup, fireEvent } from '@testing-library/react'
import faker from 'faker'
import Form from '.'

describe('Form', () => {
  beforeEach(() => {
    cleanup()
  })

  it(
    'should create a new book with title and description values and reset form',
    () => {
      const createBookMock = jest.fn()

      const bookMock = {
        title: faker.name.firstName(),
        description: faker.lorem.paragraph(),
      }

      const { getByLabelText, getByText } = render(<Form createBook={createBookMock} />)

      const titleInput = getByLabelText(/title/i)
      const descriptionInput = getByLabelText(/description/i)
      const buttonElement = getByText(/create/i)

      fireEvent.change(titleInput, { target: { value: bookMock.title, name: 'title' } })
      fireEvent.change(descriptionInput, { target: { value: bookMock.description, name: 'description' } })

      fireEvent.click(buttonElement)
      // fireEvent.submit()

      expect(createBookMock).toHaveBeenCalled()
      expect(createBookMock).toHaveBeenCalledWith(bookMock.title, bookMock.description)
      expect(titleInput.value).toBe('')
      expect(descriptionInput.value).toBe('')
    }
  )
})
