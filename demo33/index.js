function jsonParse(str) {
  return new Function('return ' + str)(); // return后有一个空格
}

const sum = new Function('a','b','return a + b');
sum(1, 2); // 3

const str = '{"a":"a1","b":[1,2,3],"c":22,"e":1562815128952,"f":null,"g":{"name": "jack"}}';
console.dir(jsonParse(str)) //
// a: "a1",
// b: [1, 2, 3],
// c: 22,
// e: 1562815128952,
// f: null,
// g: {name: "jack"}

// 可参考连接 https://www.jianshu.com/p/b318058f7c1b