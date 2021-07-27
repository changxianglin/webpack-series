const log = console.log.bind(console);

// var tokenIndex = 0;

const TokenType = {
  bracketLeft: "左括号",
  bracketRight: "right",
  number: "num",
  plus: '+',
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

const tokens = function (code) {
  var ts = [];
  for (let e of code) {
    if (e == "[") {
      var t = new Token(e, TokenType.bracketLeft);
      ts.push(t);
    } else if (e == "]") {
      var t = new Token(e, TokenType.bracketRight);
      ts.push(t);
    } else if (e == "+") {
      var t = new Token(e, TokenType.plus);
      ts.push(t);
    } else if (isDigit(e)) {
      e = Number(e)
      var t = new Token(e, TokenType.number);
      ts.push(t);
    } else {
      log("wrong tokens");
    }
  }

  return ts;
};

const parse = function (tokenlist) {
  // var t = ts[tokenIndex];
  // tokenIndex += 1;

  var tl = tokenlist;

  var l = [];
  while (tl.hasToken()) {
    var t = tl.readToken();
    if (t.type == TokenType.bracketLeft) {
      var t1 = parse(tl);
      l.push(t1);
    } else if (t.type == TokenType.bracketRight) {
      return l;
    } else if (t.type == TokenType.number) {
      l.push(t);
    } else if (t.type == TokenType.plus) {
      l.push(t);
    } else {
      log("wrong type");
    }
  }
  return l;
};

const eval = function (ast) {
  var op = ast[0]
  if (op.type == TokenType.plus) {
    return ast[1].value + ast[2].value
  }
}

const _main = function () {
  // var s = "[123[456[7]8]9]";
  // var s = "[123]";
  var s = "[+19]";

  var ts = tokens(s);
  log("ts", ts);

  var tl = new TokenList(ts);

  var ast = parse(tl);
  log("ast", ast);

  var v = eval(ast[0]);
  log("eval", v);
};

_main();
