console.log('hello demo...!')

const log = console.log.bind(console)

// let s = Symbol()
// log(typeof s)

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')

// log(s1)
// log(s2)

// log(s1.toString())
// log(s2.toString())

// const obj = {
//   toString() {
//     return 'abc'
//   }
// }

// const sym = Symbol(obj)
// log(sym)


// let s1 = Symbol()
// let s2 = Symbol()

// log(s1 === s2)

// let s1 = Symbol('foo')
// let s2 = Symbol('foo')

// log(s1 === s2)

// let sym = Symbol('My symbol')

// log('your symbol is ' + sym)
// log(`your symbol is ${sym}`)

// let sym = Symbol('My symbol')

// log(String(sym))
// log(sym.toString())

// let sym = Symbol()
// log(Boolean(sym))
// log(!sym)
// log(Number(sym))
// log(sym + 2)


// const sym = Symbol('foo')

// log(String(sym))
// log(sym.toString())
// log(sym.description)

// let mySymbol = Symbol()

// let a = {}
// a[mySymbol] = 'Hello!'

// let a = {
//   [mySymbol]: 'Hello!'
// }

// let a = {}
// Object.defineProperty(a, mySymbol, { value: 'Hello!' })


// log(a[mySymbol])

// const mySymbol = Symbol()
// const a = {}

// a.mySymbol = 'Hello'
// log(a[mySymbol])
// log(a['mySymbol'])
// let s = Symbol()

// let obj = {
//   [s]: function (arg) {
//     log(arg)
//   }
// }

// let obj = {
//   [s](arg) {
//     log(arg)
//   }
// }

// obj[s](123)

// const log = {}

// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// }

// console.log(log.levels.DEBUG, 'debug message')
// console.log(log.levels.INFO, 'info message')

// const COLOR_RED = Symbol()
// const COLOR_GREEN = Symbol()

// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       return COLOR_GREEN;
//     case COLOR_GREEN:
//       return COLOR_RED;
//     default:
//       throw new Error('Undefined color')
//   }
// }

// console.log(getComplement(COLOR_RED))

// function getArea(shape, options) {
//   let area = 0

//   switch (shape) {
//     case 'Triangle':
//       area = .5 * options.width * options.height
//       break
//   }

//   return area
// }

// log('Triangle', { width: 100, height: 100 })

// const shapeType = {
//   triangle: 'Triangle'
// }

// function getArea(shape, options) {
//   let area = 0
//   switch (shape) {
//     case shapeType.triangle:
//       area = .5 * options.width * options.height
//       break
//   }

//   return area
// }

// getArea(shapeType.triangle, { width: 100, height: 100 })

// const obj = {}
// let a = Symbol('a')
// let b = Symbol('b')

// obj[a] = 'Hello'
// obj[b] = 'World'

// const objectSymbols = Object.getOwnPropertySymbols(obj)

// log(objectSymbols)

// const obj = {}
// const foo = Symbol('foo')

// obj[foo] = 'bar'

// for (let i in obj) {
//   log(i)
// }

// log(Object.getOwnPropertyNames(obj))
// log(Object.getOwnPropertySymbols(obj))

// let obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3,
// }

// log(Reflect.ownKeys(obj))

// let size = Symbol('size')

// class Collection {
//   constructor() {
//     this[size] = 0
//   }

//   add(item) {
//     this[this[size]] = item
//     this[size]++
//   }

//   static sizeOf(instance) {
//     return instance[size]
//   }
// }

// let x = new Collection()
// log(Collection.sizeOf(x))

// x.add('foo')
// log(Collection.sizeOf(x))

// log(Object.keys(x))
// log(Object.getOwnPropertyNames(x))
// log(Object.getOwnPropertySymbols(x))

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')

// log(s1 === s2)

// log(Symbol.for('bar') === Symbol.for('bar'))

// log(Symbol('bar') === Symbol('bar'))

// let s1 = Symbol.for('foo')
// log(Symbol.keyFor(s1))

// let s2 = Symbol('foo')
// log(Symbol.keyFor(s2))

// function foo() {
//   return Symbol.for('bar')
// }

// const x = foo()
// const y = Symbol.for('bar')
// log(x === y)

// iframe = document.createElement('iframe')
// iframe.src = String(window.location)
// document.body.appendChild(iframe)

// log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'))


// function A() {
//   this.foo = 'hello'
// }

// if (!global._foo) {
//   global._foo = new A()
// }

// modules.exports = global._foo

// class MyClass {
//   [Symbol.hasInstance(foo)](foo) {
//     return foo instanceof Array
//   }
// }

// log([1, 2, 3] instanceof new MyClass())

// class Even {
//   static [Symbol.hasInstance](obj) {
//     return Number(obj) % 2 === 0
//   }
// }

// const Even = {
//   [Symbol.hasInstance](obj) {
//     return Number(obj) % 2 === 0
//   }
// }

// log(1 instanceof Even)
// log(2 instanceof Even)
// log(12345 instanceof Even)


// let arr1 = ['c', 'd']
// log(['a', 'b'].concat(arr1, 'e'))
// log(arr1[Symbol.isConcatSpreadable])

// let arr2 = ['c', 'd']
// log(arr2[Symbol.isConcatSpreadable] = false)
// log(['a', 'b'].concat(arr2, 'e'))

// let obj = { length: 2, 0: 'c', 1: 'd' }
// log(['a', 'b'].concat(obj, 'e'))

// obj[Symbol.isConcatSpreadable] = true
// log(['a', 'b'].concat(obj, 'e'))


// class A1 extends Array {
//   constructor(args) {
//     super(args)
//     this[Symbol.isConcatSpreadable] = true
//   }
// }

// class A2 extends Array {
//   constructor(args) {
//     super(args)
//   }
//   get [Symbol.isConcatSpreadable]() {
//     return false
//   }
// }

// let a1 = new A1()
// a1[0] = 3
// a1[1] = 4
// let a2 = new A2()
// a2[0] = 5
// a2[1] = 6
// log([1, 2].concat(a1).concat(a2))


// class MyArray extends Array {
//   static get [Symbol.species]() { return Array }
// }

// const a = new MyArray(1, 2, 3)
// const b = a.map(x => x)
// const c = a.filter(x => x > 1)

// log(b instanceof MyArray)
// log(c instanceof MyArray)

// class MyArray extends Array {
//   static get [Symbol.species]() { return Array }
// }

// const a = new MyArray()
// const b = a.map(x => x)

// log(b instanceof MyArray)
// log(b instanceof Array)

// class T1 extends Promise {

// }

// class T2 extends Promise {
//   static get [Symbol.species]() {
//     return Promise
//   }
// }

// log(new T1(r => r()).then(v => v) instanceof T1)
// log(new T2(r => r()).then(v => v) instanceof T2)

// String.prototype.match(regexp)

// regexp[Symbol.match](this)

// class MyMatcher {
//   [Symbol.match](string) {
//     return 'hello world'.indexOf(string)
//   }
// }

// log('e'.match(new MyMatcher()))

// String.prototype.replace(searchValue, replaceValue)
// searchValue[Symbol.replace](this, replaceValue)

// const x = {}
// x[Symbol.replace] = (...s) => console.log(s)

// 'Hello'.replace(x, 'World')


// String.prototype.search(regexp)
// regexp[Symbol.search](this)

// class Mysearch {
//   constructor(value) {
//     this.value = value
//   }
//   [Symbol.search](string) {
//     return string.indexOf(this.value)
//   }
// }

// log('foobar'.search(new Mysearch('foo')))

// String.prototype.split(separator, limit)
// separator[Symbol.split](this, limit)

// class MySplitter {
//   constructor(value) {
//     this.value = value
//   }

//   [Symbol.split](string) {
//     let index = string.indexOf(this.value)
//     if (index === -1) {
//       return string
//     }
//     return [
//       string.substr(0, index),
//       string.substr(index + this.value.length)
//     ]
//   }
// }

// log('foobar'.split(new MySplitter('foo')))

// log('foobar'.split(new MySplitter('bar')))

// log('foobar'.split(new MySplitter('baz')))

// const myIterable = {}
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// log([...myIterable])

// class Collection {
//   *[Symbol.iterator]() {
//     let i = 0
//     while (this[i] !== undefined) {
//       yield this[i]
//       ++i
//     }
//   }
// }

// let myCollection = new Collection()
// myCollection[0] = 1
// myCollection[1] = 2

// for (let value of myCollection) {
//   log(value)
// }