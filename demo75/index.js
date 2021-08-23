var obj = {},
  textInput = document.querySelector("#textInput"),
  textSpan = document.querySelector("#textSpan");

Object.defineProperty(obj, "foo", {
  set: function (newValue) {
    textInput.value = newValue;
    textSpan.innerHTML = newValue;
  },
});

textInput.addEventListener("keyup", function (e) {
  obj.foo = e.target.value;
});
