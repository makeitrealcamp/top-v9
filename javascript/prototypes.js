// object literals
// function greet() {
//   console.log('Hola mi nombre es ' + this.name)
// }

// const maria = {
//   name: 'María',
//   age: 24,
//   greet: greet
// }

// const martin = {
//   name: 'Martin',
//   age: 30,
//   greet: greet
// }

// const ana = {
//   name: 'Ana',
//   age: 28,
//   greet: greet
// }

// maria.greet()
// martin.greet()
// ana.greet()

// fabricas de objetos
// function person(name, age) {
//   return {
//     name: name,
//     age: age,
//     greet: function() {
//       console.log('Hola mi nombre es ' + this.name)
//     }
//   }
// }

// const maria = person('María', 24)
// const martin = person('Martin', 30)
// const ana = person('Ana', 28)

// maria.greet()
// martin.greet()
// ana.greet()

// Prototipos
// camelCase
// PascalCase
// snake_case
// kebab-case

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype = new Object()

// Person.prototype.greet = function() {
//   console.log('Hola mi nombre es ' + this.name)
// }

// Person.prototype.jump = function() {
//   console.log('I\'m jumping')
// }

// const maria = new Person('María', 24)
// const martin = new Person('Martin', 30)
// const ana = new Person('Ana', 29)

// maria.greet()
// martin.greet()
// ana.greet()

// function Teacher(name, age, lesson) {
//   Person.call(this, name, age) // heredar las propiedades
//   this.lesson = lesson
// }

// Teacher.prototype = new Person() // conectar el prototype a la cadena prototipal
// Teacher.prototype.constructor = Teacher // define la instancia

// const simon = new Teacher('Simón', 26, 'TOP')

// console.log(simon)
// simon.greet()

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log('Hola mi nombre es ' + this.name)
  }
}

class Teacher extends Person {
  constructor(name, age, lesson) {
    // Person.call(this, name, age)
    super(name, age)
    this.lesson = lesson
  }
}

const simon = new Person('Simon', 25, 'TOP')
simon.greet()
