const { sum } = require('.')

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1,2)).toBe(3)
    expect(sum(1,4)).toBe(5)
    expect(sum(3,2)).toBe(5)
    expect(sum(5,1)).toBe(6)
  })
})
