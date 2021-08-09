const log = console.log.bind(console);

var arr = [3, 1, 4, 2, 5, 21, 6, 15, 63];

function sortA(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      // 获取第一个值和后一个值比较
      var cur = arr[i];
      console.log(i, j);
      if (cur > arr[j]) {
        //因为需要交换值，所以会把后一个值替换，我们要鲜保存下来
        let index = arr[j];
        // 交换值
        arr[j] = cur;
        arr[i] = index;
      }
    }
  }
  return arr;
}

const list = sortA(arr);
log(list);

function sortArr(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var el = arr[i];
    var e2 = arr[i + 1];
    console.log(i, el, e2);
    if (el > e2) {
      var index = arr[i + 1];
      arr[i + 1] = el;
      arr[i] = index;
    }
  }
  return arr;
}

// const list = sortArr(arr);
// log(list);
