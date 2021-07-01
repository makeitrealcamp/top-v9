import { render, cleanup } from '@testing-library/react'
import faker from 'faker'
import Book from '.'

describe('Book', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    const mockBook = {
      title: faker.name.firstName(),
      votes: faker.random.number(),
      description: faker.lorem.paragraph(),
    }

    const { getByTestId } = render(
      <Book
        title={mockBook.title}
        votes={mockBook.votes}
        description={mockBook.description}
      />
    )

    const titleElement = getByTestId('title')
    const votesElement = getByTestId('votes')
    const descriptionElement = getByTestId('description')

    expect(titleElement.textContent).toContain(mockBook.title)
    expect(votesElement.textContent).toContain(mockBook.votes)
    expect(descriptionElement.textContent).toContain(mockBook.description)
  })
})
