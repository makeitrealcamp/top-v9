import { render, cleanup } from '@testing-library/react'
import faker from 'faker'
import Books from '.'

describe('Books', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render no books created if books list is empty', () => {
    const { getByText } = render(<Books books={[]} />)

    const textElement = getByText('No books created!')

    expect(textElement).toBeInTheDocument()
  })

  it('should render a list of books', () => {
    const length = Math.ceil(Math.random() * 20)

    const booksMock = Array.from({ length }, () => {
      return {
        id: faker.random.uuid(),
        title: faker.name.firstName(),
        votes: faker.random.number(),
        description: faker.lorem.paragraph(),
      }
    })

    const { getAllByTestId } = render(<Books books={booksMock} />)

    expect(getAllByTestId('book')).toHaveLength(length)
  })
})
