// Array
let arr = [1,2,3]

// Copiar
// let arr2 = [].concat(arr)
// let arr2 = arr.slice()
// console.log(arr == arr2)

// Obtener
// console.log(arr[0])

// Agregar
// Al final
// arr.push(8)
// let arr2 = arr.concat(8).concat([10, 11, 12])
// console.log(arr)
// console.log(arr2)

// Al inicio
// arr.unshift(0)
// let arr2 = [0, 0, 0].concat(arr)
// console.log(arr2)

// Al medio
// arr.splice(1, 0, 10)
// let first = arr.slice(0, 2)
// let second = arr.slice(2)
// let arr2 = first.concat(4).concat(second)
// let arr2 = arr.slice(0,2).concat(4).concat(arr.slice(2))
// console.log(arr2)

// Modificar
// arr[1] = 50
// arr.splice(2, 1, 45)
// let arr2 = arr.slice(0,1).concat(4).concat(arr.slice(2))
// console.log(arr2)

// Eliminar
// Al final
// arr.pop()
// let arr2 = arr.slice(0, -1)

// Al inicio
// arr.shift()
// let arr2 = arr.slice(1)

// Al medio
// arr.splice(3, 1)
// let arr2 = arr.slice(0,1).concat(arr.slice(2))
// console.log(arr2)
// console.log(arr)

// Iteraciones
// let arr3 = [[], []]
function doble(el, index) {
  return el.concat(1)
}
let arr2 = arr3.map(doble)

function evens(el) {
  return el % 2 === 0
}
let arr2 = arr.filter(evens)
// let arr2 = arr.reduce(function (acc, el) {
//   return acc + el
// }, 0)
// arr.forEach()
// arr.every()
// arr.some()
// console.log(arr2)

// Objects
let obj = { a: 1, b: 2, 'hola-mundo': 3 }

// Copiar
// let obj2 = Object.assign({}, obj)

// Obtener
// console.log(obj.a)
// console.log(obj['hola-mundo'])

// let prop = 'a'
// function prop() {
//   return 'b'
// }
// console.log(obj[prop()])

// Agregar valor
// obj.c = 10
// obj['d'] = 11

// let obj2 = Object.assign({}, obj, { c: 3, d: 4 })
// console.log(obj2)

// console.log(obj)

// Modificar valor
// obj.a = 5
// obj['c'] = 14

// let obj2 = Object.assign({}, obj, { a: 5 })
// console.log(obj)
// console.log(obj2)
// console.log(obj === obj2)

// console.log(obj)

// Eliminar
delete obj.a
delete obj['hola-mundo']

// console.log(obj)

// Asignación por referencia vs Asignación por valor
let a = { a: 1 } // 1,2
let b = { a: 1 } // 2,1
let c = a // 1,2

// console.log(a == b) // false
// console.log(a == c) // true

// a.b = 2
// console.log(c)
// Immutabilidad
