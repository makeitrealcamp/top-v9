// Primitivos
// let num: number;
// let num: number = 1;
let num = 1; // infiere que el tipo es number

num = 0;
// num = 'string'

let str: string = 'hola'

// str = true

let boo: boolean = true
// boo = undefined
// boo = null

// boo = 0

// Multiple
// let foo: any = 0
// foo = true
// foo = 'str'
// foo = undefined
// foo = null

// let foo: number | string = 0
// foo = 'str'
// foo = true

// Type Alias
type name = number | string

let foo: name = 0
foo = 'str'
// foo = true

// Array
// let arr: number[] = [1,2,3]
// let arr: number[] | string[] = ['str', 'hola']
// let arr: name[] = ['str', 1, 2, 'hola']
let arr: Array<number | string> = ['str', 1, 2, 'hola']

// Tuples
let tup: [string, number] = ['hola', 1]

// Functions
// function sum<T>(a: T, b: T): T {
//   return a + b
// }

// sum<string>('hola', ' mundo')
// sum<number>(1, 2)

// Interfaces
interface IPerson {
  name: string,
  age: number,
  working?: boolean
}

// Duck Typing: si camina como pato y hace cuak como pato entonces es un pato

// const car: IPerson = {
//   name: 'pichirilo',
//   age: 3
// }

// class Person implements IPerson {
//   name
//   age
//   working

//   constructor(name: string, age: number, working?: boolean) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }
// }

// class Person {
//   name
//   age
//   working

//   constructor(name: string, age: number, working?: boolean) {
//     this.name = name
//     this.age = age
//     this.working = working
//   }
// }

// const person: IPerson = new Person('maria', 28, true)

const person: IPerson = { name: 'Maria', age: 28 }

interface ITeacher {
  course: 'TOP' | 'FS',
  teach: () => void
}

const simon: IPerson & ITeacher = {
  name: 'simon',
  age: 30,
  course: 'TOP',
  teach() {
    console.log('teaching course')
  }
}
