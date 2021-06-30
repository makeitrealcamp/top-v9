import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    cleanup()
  })
  // beforeAll(() => {})
  // afterEach(() => {})
  // afterAll(() => {})

  it('should render correctly', () => {
    const { debug, getByText } = render(<App />)

    const element = getByText('src/App.js')

    expect(element).toMatchSnapshot()
  })
})
