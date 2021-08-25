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
function throttle(func, wait) {
  var timeout;
  var previous = 0;

  return function () {
    context = this;
    args = arguments;

    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

container.onmousemove = throttle(getUserAction, 1000);
