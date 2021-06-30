const { sum, multiply, person } = require('.')

describe('sum', () => {
  it('should add two numbers correctly', () => {
    const result = sum(1,2)

    expect(result).toBe(3)
  })

  it('should add 2 and 5 correctly', () => {
    expect(sum(2,5)).toBe(7)
  })
})

describe('multiply', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(2,4)).toBe(8)
    expect(multiply(1000, 3000)).toBe(3000000)
    expect(multiply(389, 5764)).toBe(2242196)
  })

  it('should return an alert when user inputs invalid values', () => {
    expect(multiply('hola', 8)).toBe('wrong arguments')
    expect(multiply(8, 'hola')).toBe('wrong arguments')
    expect(multiply('hola', 'hola')).toBe('wrong arguments')
    expect(multiply(9, {})).toBe('wrong arguments')
    expect(multiply(null, 7)).toBe('wrong arguments')
    expect(multiply(10)).toBe('wrong arguments')
  })
})

describe('person', () => {
  it('should create a person correctly', () => {
    const maria = person('maría', 23)

    expect(maria).toMatchObject({ name: 'maría', age: 23 })
    // expect(maria.name).toBe('maría')
    // expect(maria.age).toBe(23)
  })
})
