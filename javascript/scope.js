// Coerción implicita

// console.log(1 + '1') // 11 -> '1' + '1' -> '11'
// console.log([1,2,3] + 1) // 1,2,31 -> [1,2,3].join(',') + '1'
// console.log('1' - 1) // 0 -> 1 - 1

// console.log(1 == '1') // true
// console.log(1 === '1') // false

// Falsy
// undefined, null, 0, '', NaN, false

// Truthy
// los demás

// if(' ') {
//   console.log('true')
// }

// Lexical Scope
// Static Scope

// Global
//   foo
//   bar
//     arg
//     fuz
//     baz
//       far

// Entorno Global - Window - Global
// var foo = 0

// Función
// function bar(arg) {
//   var fuz = 1

  // shadowing
//   function baz(arg) {
//     var fuz = 2
//     var far = 2
//   }
// }

// if(true) {
  // var bee = 3
  // let bee = 3
// }

// for(var i = 0; i < arr.length; i++) {
  // var boo = 4
//   let boo = 4
// }

// Operaciones de mano izquierda - declaración
// var foo;
// let foo;
// const foo = 5;
// function foo()
// Operaciones de mano derecha - definición
// foo = 4
// console.log(foo)

// Hoisting
// console.log(foo) // undefined
// let foo = 4
// console.log(foo)

// console.log(sum(1,2))

function sum(a, b) {
  return a + b
}

// Closure
// const sum2 = sum
// console.log(sum2(1,2))

// const sum2 = sum(1,2)
// console.log(sum2)

// Es una función que aún siendo invocada por fuera de su lexical scope tiene acceso a su lexical scope. Derechos de nacimiento de una función

// foo
//   faz
//   bar
function foo() {
  let faz = 4

  function bar() {
    faz++;
    return faz;
  }

  return bar
}

const boo = foo()

// console.log(boo())
// console.log(boo())
// console.log(boo())
// console.log(boo())

function car() {
  let speed = 0

  function accelerate() {
    speed++
  }

  function stop() {
    speed--
  }

  function getSpeed() {
    return speed
  }

  return {
    accelerate: accelerate,
    stop: stop,
    getSpeed: getSpeed,
  }
}

const c1 = car()
const c2 = car()
// console.log(c1.getSpeed())
// c1.accelerate()
// c1.accelerate()
// console.log(c1.getSpeed())
// c1.stop()
// console.log(c1.getSpeed())
// console.log(c2.getSpeed())

function multiply(base) {
  function multiply2(num) {
    return base * num
  }

  return multiply2
  // return function (num) {
  //   return base * num
  // }
}

const multiplyBy2 = multiply(2)
console.log(multiplyBy2(2))
console.log(multiplyBy2(3))
console.log(multiplyBy2(4))
const multiplyBy3 = multiply(3)
console.log(multiplyBy3(2))
console.log(multiplyBy3(3))
console.log(multiplyBy3(4))
const multiplyBy10 = multiply(10)
console.log(multiplyBy10(3))
console.log(multiplyBy10(4))
console.log(multiplyBy10(5))
