// Argumentos por defecto
function sum(a = 0, b = 0) {
  // if(b === undefined) {
  //   return 'b debe ser un número'
  // }

  // if(typeof a !== 'number') {
  //   a = 1
  // }

  return a + b
}

// sum()
// sum(0,0)

// console.log(sum(1, 2))

// Plantillas literales
const name = 'María'
// const greet = 'Hola mi nombre es ' + name + '!'
// const greet = `Hola mi nombre es ${name}!`
// const greet = `Hola mi nombre es ${sub({ a: 1, b: 2 })}!`
// const greet = 'Hola, \nmi nombre es\nMaría'
// const greet = `
// Hola,
// Mi nombre es
// María
// `
// const html = '<div><ul><li></li></ul></div>'
const html = `
<div>
  <ul>
    <li>${name}</li>
  </ul>
</div>
`

// console.log(html)

// Destructuración
// const obj = { a: 1, b: { hola: 'mundo' }, c: [1,2,3] }
// let a = obj.a
// let b = obj.b
// let c = obj.c

// let { a, b: { hola }, c } = obj
// console.log(hola)

function sub({ a = 1, b }) {
  return b - a
}

// console.log(sub({ b: 2 }))

// const arr = [1,2,3]
// const [ first, loquesea ] = arr

// console.log(first, loquesea)

// Spread Operator
// let arr = [1,2,3,4,5]
// console.log(Math.max(1,2,3,4,5))
// console.log(Math.max(...arr))

// let arr2 = [ ...arr ]
// let arr3 = [ 0, ...arr ]
// let arr4 = [ ...arr, 6 ]
// let arr5 = [ ...arr, ...arr2, ...arr3, ...arr4 ]
// console.log(arr5)

// let obj = { a: 1 }
// let obj2 = { ...obj }
// let obj3 = { ...obj, b: 2 }
// let obj4 = { ...obj, a: 4 }
// let obj5 = { ...obj, ...obj2, ...obj3, ...obj4 }
// console.log(obj4)

// Rest
// const arr = [1,2,3,4,5]
// const [first, ...rest] = arr
// console.log(first, rest)

// const obj = { a: 1, b: 2, c: 3 }
// const { a, ...obj2 } = obj
// console.log(obj2)

// Métodos o propiedades conscisas
function greet() {}

function person(name, age) {
  return {
    name,
    age,
    greet,
    bar() {},
  }
}

let name = 'maria'
let age = 24
const maria = { name, age }

console.log(person('maria', 24))

// let, const
// arrow functions
// class
