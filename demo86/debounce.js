// 初版
// var count = 1;
// var container = document.getElementById("container");

// function getUserAction(e) {
//   console.log(e);
//   container.innerHTML = count++;
// }

// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     var context = this;
//     var args = arguments;

//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// container.onmousemove = debounce(getUserAction, 1000);

// 二版
// var count = 1;
// var container = document.getElementById("container");

// function getUserAction() {
//   container.innerHTML = count++;
// }

// function debounce(func, wait, immediate) {
//   var timeout, result;
//   return function () {
//     var context = this;
//     var args = arguments;

//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, wait);
//       if (callNow) result = func.apply(context, args);
//     } else {
//       timeout = setTimeout(function () {
//         func.apply(context, args);
//       }, wait);
//     }

//     return result;
//   };
// }

// container.onmousemove = debounce(getUserAction, 1000, true);

// 三版
var count = 1;
var container = document.getElementById("container");

function getUserAction() {
  container.innerHTML = count++;
}

function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced = function () {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }

    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}

var setUserAction = debounce(getUserAction, 1000, true);
container.onmousemove = setUserAction;

document.getElementById("button").addEventListener("click", function () {
  setUserAction.cancel();
});
