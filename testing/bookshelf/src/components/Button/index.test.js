import { render, cleanup } from '@testing-library/react'
import Button from '.'

describe('Button', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    const { getByTestId } = render(
      <Button
        type="button"
      >
        Click
      </Button>
    )

    const button = getByTestId('button')

    expect(button).toBeInTheDocument()
  })

  it('should disable button when children shorter than 5 characters', () => {
    const { getByTestId } = render(
      <Button
        type="button"
      >
        Cl
      </Button>
    )

    const button = getByTestId('button')

    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })
})
