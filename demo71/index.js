var int = document.getElementById("in");
var out = document.getElementById("out");

var obj = {};

Object.defineProperty(obj, "msg", {
  enumerable: true,
  configurable: true,
  set(newVal) {
    out.innerHTML = newVal;
  },
});

int.addEventListener("input", function (e) {
  obj.msg = e.target.value;
});

// 最容易版本数据双向绑定 mvvm
