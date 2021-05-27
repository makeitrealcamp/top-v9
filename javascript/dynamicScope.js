// 'use strict'
// this

// argumento
// function bar(ctx) {
//   console.log(ctx)
//   console.log(this)
//   console.log(this.foo)
// }

const bar = ctx => {
  // el this siempre es el contexto donde se declaro la función flecha
  console.log(ctx)
  console.log(this)
  console.log(this.foo)
}

// 1. Por defecto, el this apunta al entorno global. En modo estricto es undefined
global.foo = 4
// parametro
// bar('default')

// 2. El this apunta al objeto desde el cual se está invocando el método.
const obj = {
  foo: 5,
  bar: bar,
}

obj.bar('object')

// 3. El this apunta a lo que nosotros le digamos que apunte
const obj2 = {
  foo: 6
}

// soft binding
bar.call(obj2, 'call')
bar.apply(obj2, ['apply'])
obj.bar.call(obj2, 'call obj2')

// hard binding
const bar2 = bar.bind(obj2, 'bind')
// function bar2(ctx) {
//   return bar.call(obj2, ctx)
// }

bar2('hard binding')
bar2.call(obj, 'hard binding 2')

const obj3 = {
  foo: 7,
  bar: bar2
}

obj3.bar()

// 4. Cuando usamos la palabra clave new
// - crea un objeto totalmente nuevo
// - asocia ese objeto con otro objeto
// - al this le asigna el objeto nuevo
// - ejecuta la lógica de la función
// - si la función no está retornado un objeto entonces retorna el this

// Función Constructora - Prototipo
function Person(name) {
  // this = {
  //   name: name,
  //   constructor: Person
  // }

  this.name = name

  // return this
}

// Instancia
const p1 = new Person('maria')

console.log(p1)
