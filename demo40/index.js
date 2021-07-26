const tokenType = {
  bracketLeft: "左括号",
  bracketRight: "right",
  number: "num",
};

class Token {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

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

const isDigit = function (c) {
  const digist = "0123456789";
  return digist.indexOf(c) > -1;
};

const tokens = function (code) {
  var ts = [];

  for (let index = 0; index < code.length; index++) {
    const e = code[index];
    if (e == "[") {
      var t = new Token(e, tokenType.bracketLeft);
      ts.push(t);
    } else if (e == "]") {
      var t = new Token(e, tokenType.bracketRight);
      ts.push(t);
    } else if (isDigit(e)) {
      var t = new Token(e, tokenType.number);
      ts.push(t);
    } else {
      console.log("无法别的的符号");
    }
  }

  return ts;
};

// var tokenIndex = 0;

const parse = function (tokenList) {
  // var t = ts[tokenIndex];
  // tokenIndex += 1;
  var tl = tokenList;

  var l = [];
  while (tl.hasToken()) {
    t = tl.readToken();
    if (t.type == tokenType.bracketLeft) {
      var t1 = parse(tl);
      l.push(t1);
    } else if (t.type == tokenType.bracketRight) {
      return l;
    } else if (t.type == tokenType.number) {
      l.push(t.value);
    } else {
      console.log("错了");
    }
  }

  return l;
};

const __main = function () {
  var s = "[123[456[7]8]9]";
  // var s = "[123]";

  var ts = tokens(s);

  console.log(ts);
  var tl = new TokenList(ts);

  var ast = parse(tl);

  console.log("ast", ast[0]);
};

__main();
