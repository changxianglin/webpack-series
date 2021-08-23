var obj = {
  foo: "foo",
};

Object.defineProperty(obj, "foo", {
  get: function () {
    console.log("将要读取obj.foo属性");
  },
  set: function (newVal) {
    console.log("当前值为", newVal);
  },
});

obj.foo; // 将要读取obj.foo属性

obj.foo = "name"; // 当前值为 name
