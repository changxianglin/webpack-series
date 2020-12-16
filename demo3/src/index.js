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

iframe = document.createElement('iframe')
iframe.src = String(window.location)
document.body.appendChild(iframe)

log(iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'))