// 实现 JSON.parse 功能
// 注释写明代码实现思路

const cutS = (s, i) => {
  console.log("要计算字符", s[i + 1]);
};

const tokens = function (str) {
  var ts = [];
  var i = 0;

  while (true) {
    if (str[i] == "{") {
      console.log("开始");
      ts.push(str[i]);
      i += 1;
    } else if (str[i] == "}") {
      console.log("结束");
      ts.push(str[i]);
      i += 1;
      break;
    } else if (str[i] == ":") {
      console.log("间隔符号");
      ts.push(str[i]);
      i += 1;
    } else if (str[i] == ",") {
      console.log("逗号");
      i += 1;
    } else if ('"') {
      console.log("字符串开始或者结尾");
      var s = cutS(str, i);
      i += 1;
    } else if (str[i] == " ") {
      console.log("空格");
      i += 1;
    } else if (str[i] == "0") {
      console.log("小数");
      i += 1;
    } else if (str[i] == "-") {
      console.log("负数");
      i += 1;
    } else {
      console.log("不在规则内");
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
  console.log("小惊喜");
  const s = '{"temp" : -3, "weight": 0.8}';
  parse(s);
};

__main();
