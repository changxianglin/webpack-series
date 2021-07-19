// 实现 JSON.parse 功能
// 注释写明代码实现思路

const cutS = (s, i) => {
  var n = i + 1;
  var t = "";
  while (true) {
    if (s[n] == '"') {
      console.log(s, "结束", i, n);
      t = s.slice(i, n);
      console.log("t", t);
      n += 1;
      break;
    } else {
      console.log("继续往下读");
      n += 1;
    }
  }
  console.log("获得", t, n);

  return { s: t, num: n };
};

const cutA = (s, i) => {
  var n = i + 1;
  var l = [];
  while (true) {
    if (s[n] == "]") {
      console.log("结束");
      n += 1;
      break;
    } else if (s[n] == ",") {
      console.log("开启");
      const t = s.slice(i, n);
      l.push();
      n += 1;
    }
  }

  return l;
};

const tokens = function (str) {
  var ts = [];
  var i = 0;
  while (true) {
    console.log("执行后", str[i]);
    // console.log(str[i]);
    if (str[i] == "{") {
      console.log("开头");
      ts.push(str[i]);
      i += 1;
    } else if (str[i] == ":") {
      console.log("简直");
      ts.push(str[i]);
      i += 1;
    } else if (str[i] == "}") {
      console.log("结尾");
      ts.push(str[i]);
      i += 1;
    } else if (str[i] == '"') {
      console.log("字符串");
      const { s, num } = cutS(str, i + 1);
      ts.push(s);
      i = num;
    } else if (str[i] == "[") {
      console.log("数组开始");
      const { a, num } = cutA(str, i + 1);
      ts.push(a);
      i = num;
    } else if (str[i] == "]") {
      console.log("数组结束");
      ts.push(str[i]);
      i += 1;
    } else {
      console.log("异常情况, 跳过");
      i += 1;
    }

    if (i > str.length) {
      break;
    }
  }

  console.log("解析后获得", ts);
};

const parse = (s) => {
  // s 是一个 JSON 格式的字符串
  const ts = tokens(s);
  // const tl = new TokenList(ts);
  // 解析 s, 返回相应的 JSON 对象格式
  // 1. 数字需要考虑负数和小数
  // 2. 字符串需要考虑转义字符
  // 3. 考虑嵌套数组和对象
  // 4. 需要加上布尔值和 null
  // const ast = parseMap(tl);
};

const __main = () => {
  console.log("test");
  const s = '{"name": "zhangsan", "list": [1, 2, 3]}';
  parse(s);
};

__main();
