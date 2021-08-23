var obj = {},
  textInput = document.querySelector("#textInput"),
  textSpan = document.querySelector("#textSpan");

// Object.defineProperty(obj, "foo", {
//   set: function (newValue) {
//     textInput.value = newValue;
//     textSpan.innerHTML = newValue;
//   },
// });

let handler = {
  get(target, key) {
    console.log("手机依赖");
    return target[key];
  },
  set(target, key, value) {
    console.log("触发更新", value);
    target[key] = value;
    textInput.value = value;
    textSpan.innerHTML = value;
  },
};

let proxy = new Proxy(obj, handler);

textInput.addEventListener("keyup", function (e) {
  proxy.foo = e.target.value;
});
