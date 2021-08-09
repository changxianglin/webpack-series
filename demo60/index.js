const log = console.log.bind(console);

log("...test...");

// var person = (function () {
//   var age = 25;

//   return {
//     name: "zhangsan",

//     getAge: function () {
//       return age;
//     },

//     growOlder: function () {
//       age++;
//     },
//   };
// })();

// log(person.name);
// log(person.getAge());

// person.name = 100;
// log(person.getAge());

// person.growOlder();
// log(person.getAge());

var person = (function () {
  var age = 25;

  function getAge() {
    return age;
  }

  function growOlder(params) {
    age++;
  }

  return {
    name: "zhangsan",
    getAge: getAge,
    growOlder: growOlder,
  };
})();

log(person.name);
log(person.getAge());

person.name = 100;
log(person.getAge());

person.growOlder();
log(person.getAge());
