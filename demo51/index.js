const log = console.log.bind(console);

log("work");

const TokenType = {
  bracketLeft: "[",
  bracketRight: "]",
  braceLeft: "{",
  braceRight: "}",
  number: "n",
  string: "s",
};

class Token {
  constructor(value, type) {
    this.type = type;
    this.value = value;
  }
}

const isDigit = function (c) {
  const digits = "0123456789";
  return digits.indexOf(c) > -1;
};

class TokenList {
  constructor(tokens) {
    this.tokens = tokens;
    this.index = 0;
  }

  readToken() {
    var i = this.index;
    this.index += 1;
    if (i < this.tokens.length) {
      return this.tokens[i];
    } else {
      return null;
    }
  }

  hasToken() {
    return this.index < this.tokens.length;
  }
}

const isSpace = function (c) {
  var ws = " \t\n";
  return ws.indexOf(c) > -1;
};

var i = 0;

const readNumber = function (code) {
  var index = i;
  while (true) {
    var c = code[index];
    index += 1;
    if (!isDigit(c)) {
      var n = code.slice(i, index - 1);
      i = index - 2;

      return Number(n);
    }
  }
};

const tokens = function (code) {
  var ts = [];
  // var i = 0;
  i = 0;
  while (i < code.length) {
    var e = code[i];
    if (e == "[") {
      var t = new Token(e, TokenType.bracketLeft);
      ts.push(t);
    } else if (e == "]") {
      var t = new Token(e, TokenType.bracketRight);
      ts.push(t);
    } else if (e == "{") {
      var t = new Token(e, TokenType.braceLeft);
      ts.push(t);
    } else if (e == "}") {
      var t = new Token(e, TokenType.braceRight);
      ts.push(t);
    } else if (e == "+") {
      var t = new Token(e, TokenType.plus);
      ts.push(t);
    } else if (isDigit(e)) {
      // e = Number(e);
      var n = readNumber(code);
      var t = new Token(n, TokenType.number);
      ts.push(t);
    } else if (isSpace(e)) {
      log("空格");
    } else {
      log("wrong tokens");
    }

    i += 1;
  }

  return ts;
};

const __main = function () {
  var tests = [
    `
    {}
    `,
    `
    []
    `,
    `
    [12 234]
    `,
  ];

  for (let e of tests) {
    var ts = tokens(e);
    log("这里的问题", ts);
  }
};

__main();
