console.log("...parse......");

const log = console.log.bind(console);

class Token {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

const isDigit = function (c) {
  const digits = "0123456789";
};

const tokens = function (code) {
  var ts = [];
  for (const e of code) {
    if (e == "[") {
    } else if (e == "]") {
    } else if (isDigit(e)) {
    } else {
      log("报错");
    }
    ts.push(e);
  }

  return ts;
};

var tokenIndex = 0;

const parse = function (ts) {
  var t = ts[tokenIndex];
  tokenIndex += 1;

  //
  var l = [];
  while (true) {
    if (t == "[") {
      var t1 = parse(ts);
      l.push(t1);
    } else if (t == "]") {
      return l;
    } else {
      l.push(t);
    }

    if (tokenIndex < ts.length) {
      t = ts[tokenIndex];
      tokenIndex += 1;
    } else {
      break;
    }
  }

  return l;
};

const __main = function () {
  // 词法分析
  // 语法分析
  // AST
  // ast 嵌套数组
  // var s = "[123][456[7][8]9]";
  var s = "[123]";
  var ts = tokens(s);
  log("ts", ts);
  var ast = parse(ts);
  log("ast", ast[0]);
};

__main();
