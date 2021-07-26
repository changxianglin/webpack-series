const log = console.log.bind(console)

const TokenType = {
  bracketLeft: '左括号',
  bracketRight: 'right',
  number: 'num',
}

class Token {
  constructor(value, type) {
    this.type = type
    this.value = value
  }
}

const isDigit = function (c) {
  const digits = '0123456789'
  return digits.indexOf(c) > -1
}

const tokens = function(code) {
  var ts = []
  for (const e of code) {
    if(e == '[') {
      var t = new Token(e, TokenType.bracketLeft)
      ts.push(t)
    } else if(e == ']') {
      var t = new Token(e, TokenType.bracketRight)
      ts.push(t)
    } else if(isDigit(e)) {
      var t = new Token(e, TokenType.number)
      ts.push(t)
    } else {
      log('wrong tokens')
    }
  }

  return ts
}

var tokenIndex = 0

const parse = function(ts) {
  var t = ts[tokenIndex]
  tokenIndex += 1

  var l = []
  while(true) {
  if(t.type == TokenType.bracketLeft) {
    var t1 = parse(ts)
    l.push(t1)
  } else if(t.type == TokenType.bracketRight) {
    return l 
  } else if(t.type == TokenType.number) {
    l.push(t.value)
  } else {
    log('wrong type')
  }

  if(tokenIndex < ts.length) {
    t = ts[tokenIndex]
    tokenIndex += 1
  } else {
    break
  }
}
return l
}

const _main = function() {
  // var s = '[123[456[7]8]9]'
  var s = '[123]'

  var ts = tokens(s)
  log('ts', ts)

  var ast = parse(ts)
  log('ast', ast)
}

_main()