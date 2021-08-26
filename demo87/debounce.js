var count = 1;

const container = document.getElementById("container");

const getUserAction = function () {
  container.innerHTML = count++;
};

// 1 版
// function throttle(func, wait) {
//   var context, args;
//   var previous = 0;

//   return function () {
//     var now = +new Date();
//     context = this;
//     args = arguments;
//     if (now - previous > wait) {
//       func.apply(context, args);
//       previous = now;
//     }
//   };
// }

// 2 版
// function throttle(func, wait) {
//   var timeout;
//   var previous = 0;

//   return function () {
//     context = this;
//     args = arguments;

//     if (!timeout) {
//       timeout = setTimeout(() => {
//         timeout = null;
//         func.apply(context, args);
//       }, wait);
//     }
//   };
// }

// 3 版
// function throttle(func, wait) {
//   var timeout, context, args, result;
//   var previous = 0;

//   var later = function () {
//     previous = +new Date();
//     timeout = null;
//     func.apply(context, args);
//   };

//   var throttled = function () {
//     var now = +new Date();

//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;

//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       func.apply(context, args);
//     } else if (!timeout) {
//       timeout = setTimeout(later, remaining);
//     }
//   };

//   return throttled;
// }

// 4 版

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeOut(later, remaining);
    }
  };

  throttled.cacel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  return throttled;
}

container.onmousemove = throttle(getUserAction, 1000);
