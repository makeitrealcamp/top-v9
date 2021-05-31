// const foo = undefined
// foo()

// console.log(foo)

// function foo() {
//   console.log('hola mundo')

class DivideByZero extends Error {
  constructor(message) {
    super(message)
    this.name = 'DivideByZero'
  }
}

function division(a = 1, b = 1) {
  if(b === 0) {
    throw new DivideByZero('Cannot divide by zero')
  }

  return a / b
}

// manejo de errores
try {
  division(1, 0)
} catch(error) {
  console.error('No se puede dividir por cero')
  console.error(error.name, error.message, error.stack)
}

console.log('todo salió bien')
