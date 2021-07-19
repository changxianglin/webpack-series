console.log('parse...')

var jsonStr = '{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}'
var i = 0


function parseValue(str) {
  if (str[i] === '{') {
    return parseObject(str)
  } else if (str[i] === '[') {
    return parseArray(str)
  } else if (str[i] === 'n') {
    return parseNull(str)
  } else if (str[i] === 't') {
    return parseTrue(str)
  } else if (str[i] === 'f') {
    return parseFalse(str)
  } else if (str[i] === '"') {
    return parseString(str)
  } else {//如果不考虑出错的话，不是以上所有的情况即
    return parseNumber(str)
  }
}


// 所有的函数都是从i位置开始解析出一个对应类型的值
// 同时把i移动到解析完成后的下一个位置
function parseString(str) {
  var result = ''
  i++// 开始解析之前，i是指向字符开始的双引号的，但字符的内容是不包含这个双引号的
  while(str[i] != '"') {
    result += str[i++]
  }
  i++// 移动i到解析完成后的下一个位置
  return result
}

function parseNull() {
  // 简单粗暴，直接往后读出一个长度为4的个字符串出来
  // 如果不是null，则直接报错
  var content = str.substr(i, 4)

  if (content === 'null') {
    i += 4
    return null
  } else {
    throw new Error('Unexpected char at pos: ' + i)
  }
}

function parseFalse() {
  // 基本同上
  var content = str.substr(i, 5)

  if (content === 'false') {
    i += 5
    return false
  } else {
    throw new Error('Unexpected char at pos: ' + i)
  }
}

function parseTrue() {
  // 基本同上
  var content = str.substr(i, 4)

  if (content === 'true') {
    i += 4
    return true
  } else {
    throw new Error('Unexpected char at pos: ' + i)
  }
}

function parseNumber() {
  // 本函数的实现并没有考虑内容格式的问题，实际上JSON中的数值需要满足一个格式
  // 不过好在这个格式基本可以用正则表达出来，不过这里就不写了
  // 想写的话对着官网的铁路图写一个出来就行了
  // 并且由于最后调用了parseFloat，所以如果格式不对，还是会报错的
  var numStr = ''//-2e+8
  // 此处只要判断i位置还是数字字符，就继续读
  // 为了方便，写了另一个helper函数
  while (isNumberChar(str[i])) {
    numStr += str[i++]
  }
  return parseFloat(numStr)
}

// 判断字符c是否为组成JSON中数值的符号
function isNumberChar(c) {
  var chars = {
    '-': true,
    '+': true,
    'e': true,
    'E': true,
    '.': true
  }
  if (chars[c]) {
    return true
  }
  if (c >= '0' && c <= '9') {
    return true
  }
  return false
}

// 解析数组，就很容易了
// 掐头去尾
// 然后一个值一个逗号
// 如果解析完一个值后没遇到逗号，说明解析完了
// 现在你知道没有多余的逗号有多好解析了吧~
function parseArray() {
  i++
  var result = []//[1234,"lsdf",true,false]
  while(str[i] !== ']') {
    result.push(parseValue())
    if (str[i] === ',') {
      i++
    }
  }
  i++
  return result
}

// 解析对象，一如既往的简单
// 掐头去尾
// 然后一个key，是字符串
// 一个冒号
// 一个值，可能是任意类型，所以调用parseValue
// 最后，如果解析完一组k/v对，遇到了逗号，则解析下一组，没遇到逗号，则解析完毕
function parseObject(str) {
  i++
  var result = {}//{"a":1,"b":2}
  while(str[i] !== '}') {
    var key = parseString()
    i++//由于只考虑合法且无多余空白的JSON，所以这里就不判断是不是逗号了，正常应该是发现不是逗号就报错的
    var value = parseValue()
    result[key] = value
    if (str[i] === ',') {
      i++
    }
  }
  i++
  return result
}


function parse(json) {
  console.log('执行...')
  i = 0
  jsonStr = json
  return parseValue(jsonStr)
}

console.log(parse(jsonStr))

// 参考连接 https://blog.csdn.net/imagine_tion/article/details/115610670
