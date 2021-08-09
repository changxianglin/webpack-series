const log = console.log.bind(console);

// function Person(name) {
//   var age = 25;

//   this.name = name;

//   this.getAge = function () {
//     return age;
//   };

//   this.growOlder = function () {
//     age++;
//   };
// }

// var person = new Person("zhangsan");

// log(person.name);
// log(person.getAge());

// person.age = 100;
// log(person.getAge());

// person.growOlder();
// log(person.getAge());

var Person = (function () {
  var age = 25;

  function InnerPerson(name) {
    this.name = name;
  }

  InnerPerson.prototype.getAge = function () {
    return age;
  };

  InnerPerson.prototype.growOlder = function () {
    age++;
  };

  return InnerPerson;
})();

var person1 = new Person("zhangsan");
var person2 = new Person("lisi");

log(person1.name);
log(person1.getAge());

log(person2.name);
log(person2.getAge());

person1.growOlder();
log(person1.getAge());
log(person2.getAge());
