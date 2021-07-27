const log = console.log.bind(console);

log("parse start");

const TokenType = {
  auto: "AUTO",
  bracketLeft: "[",
  bracketRight: "]",
  braceLeft: "{",
  braceRight: "}",
  number: "n",
  string: "s",
  comma: ",",
  colon: "_:_",
};

class Token {
  constructor(value, type) {
    this.type = type;
    this.value = value;
    var typs = {
      "{": TokenType.braceLeft,
      "}": TokenType.braceRight,
      "[": TokenType.bracketLeft,
      "]": TokenType.bracketRight,
      ",": TokenType.comma,
      ":": TokenType.colon,
    };

    if (type == TokenType.auto) {
      this.type = typs[value];
    }
  }
}

const isDigit = function (c) {
  const digits = "0123456789";
  return digits.indexOf(c) > -1;
};

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

const isAuto = function (c) {
  var auto = "[]{}:,";
  return auto.indexOf(c) > -1;
};

const readString = function (code) {
  var index = i + 1;
  while (true) {
    var c = code[index];
    index += 1;
    if (c == "'") {
      var s = code.slice(i, index);

      i = index - 1;
      return s;
    }
  }
};

const tokens = function (code) {
  var ts = [];
  i = 0;
  while (i < code.length) {
    var e = code[i];
    if (isAuto(e)) {
      var t = new Token(e, TokenType.auto);
      ts.push(t);
    } else if (isDigit(e)) {
      var e = readNumber(code);
      var t = new Token(e, TokenType.number);
      ts.push(t);
    } else if (e == "'") {
      var e = readString(code);
      var t = new Token(e, TokenType.string);
      ts.push(t);
    } else if (isSpace(e)) {
      // log("空格");
    } else {
      log("wrong tokens");
    }

    i += 1;
  }

  return ts;
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

  peekToken() {
    var i = this.index;
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

const parseMap = function (tokenlist) {
  var tl = tokenlist;

  var m = {};
  while (tl.hasToken()) {
    var t1 = tl.readToken();
    var t2 = tl.readToken();
    var t3 = tl.readToken();

    if (t3.type == TokenType.braceLeft) {
      var v = parseMap(tokenlist);
      m[t1.value] = v;
    } else {
      m[t1.value] = t3.value;
    }

    var t4 = tl.peekToken();
    if (t4.type == TokenType.comma) {
      tl.readToken();
    } else if (t4.type == TokenType.braceRight) {
      // map 结束
      break;
    } else {
      log("map 报错");
    }
  }
  return m;
};

const parseJson = function (tokenlist) {
  var tl = tokenlist;

  var l = [];
  while (tl.hasToken()) {
    var t = tl.readToken();
    if (t.type == TokenType.braceLeft) {
      var t1 = parseMap(tl);
      l.push(t1);
    } else if (t.type == TokenType.braceRight) {
      break;
    } else {
      log("wrong type");
    }
  }
  return l;
};

const parse = function () {
  // var tests = [
  //   `
  //   {}
  //   `,
  //   `
  //   []
  //   `,
  //   `
  //   [12 234]
  //   `,
  //   `
  //   {
  //     'key' : 123,
  //     'value' : 456
  //   }
  //   `,
  // ];
  // for (let e of tests) {
  //   var ts = tokens(e);
  //   log("这里的问题", ts);
  // }

  // var jsonString = `
  //   {
  //     'number': 2,
  //     'v': '1.2'
  //   }
  // `;

  var jsonString1 = `
    {
      'number': 2,
      'values': {
          'name': 'JavaScript',
          'version': {
            'name': {
              'name': 'JavaScript',
              'version': 6
            },
            'version': 1
          }
        }
    }
  `;
  var ts = tokens(jsonString1);
  var tl = new TokenList(ts);
  var d = parseJson(tl);
  log("end", d);
};

// parse();

log("htmlparse start");
