const log = console.log.bind(console);

// function mixin(receiver, supplier) {
//   for (var property in supplier) {
//     if (supplier.hasOwnProperty(property)) {
//       receiver[property] = supplier[property];
//     }
//   }

//   return receiver;
// }

// function EventTarget() {}

// Event.prototype = {
//   constructor: EventTarget,

//   addEventListener: function (type, listener) {
//     if (!this.hasOwnProperty("_listeners")) {
//       this_listeners = [];
//     }
//   },
// };

// function Person(name) {
//   // this.name = name;
//   if (this instanceof Person) {
//     this.name = name;
//   } else {
//     return new Person(name);
//   }
// }

// Person.prototype.sayName = function () {
//   log(this.name);
// };

// var person1 = Person("zhangsan");

// log(person1 instanceof Person);
// log(typeof person1);
// log(name);

// function Person() {}

// var person1 = new Person();
// var person2 = new Person();

// function Person(name) {
//   this.name = name;
//   this.sayName = function () {
//     log(this.name);
//   };
// }

// var person1 = new Person("zhangsan");
// var person2 = new Person("lisi");

// log(person1.name);
// log(person2.name);

// person1.sayName();
// person2.sayName();

// function Person(name) {
//   Object.defineProperty(this, "name", {
//     get: function () {
//       return name;
//     },
//     set: function (newName) {
//       name = newName;
//     },
//     enumerable: true,
//     configurable: true,
//   });

//   this.sayName = function () {
//     log(this.name);
//   };
// }

// var person1 = Person("zhangsan");

// log(person1 instanceof Person);
// log(typeof person1);
// log(name);

var book = {
  title: "The Principles of Object oriented JavaScript",
};

log("title" in book);
log(book.hasOwnProperty("title"));
log("hasOwnProperty" in book);
log(book.hasOwnProperty("hasOwnProperty"));
log(Object.prototype.hasOwnProperty("hasOwnProperty"));
