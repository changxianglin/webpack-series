// 1, 扫一下整个 JSON 字符串
    // 2, 解析 JSON 字符串
    // 3, 组装返回

    var m = ':'
    var l = '{'
    var r = '}'
    var p = ','

    function scan(t) {

      var list = []

      var counter = 0
      for (let i = 0; i < t.length; i++) {
        // console.log(counter, '扫一次', t[i])
        var town = t[i]
        if(town == m) {
          var c = t.slice(counter + 1, i)
          list.push(c)
          list.push(town)
          counter = i++
        } else if(town == l) {
          list.push(town)
          counter = i + 1
        } else if(town == r) {
          var c = t.slice(counter + 1, i)
          list.push(c)
          list.push(town)
          counter = i + 1
        } else if(town == p) {
          var c = t.slice(counter + 1, i)
          list.push(c)
          counter = i + 1
        }
     }

     return list
   }

    
   function setValue(list) {
    var result = {}
    var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    for (let j = 0; j < list.length; j++) {
      const element = list[j];
      console.log('二级', element)
      if(element == m) {
        if(list[j + 1] == l) {
          var ll = list.slice(j, 40)
          console.log('获得值', ll)
          // result[list[j - 1]] = setValue(ll)
        } else if(list[j + 1] === 'null') {
          result[list[j - 1]] = null
        } else if(list[j + 1] === 'true') {
          result[list[j - 1]] = true
        } else if(list[j + 1] === 'false') {
          result[list[j - 1]] = false
        } else if(list[j + 1][0] == '-') {
          console.log('负数')
          result[list[j - 1]] = Number(list[j + 1])
        } else if(list[j + 1][1] == '.') {
          console.log('小数')
          result[list[j - 1]] = Number(list[j + 1])
        } else if(num.includes(list[j + 1][0])) {
          console.log('数字')
          result[list[j - 1]] = Number(list[j + 1])
        } else {
          console.log('转义引号')
          result[String(list[j - 1])] = String(list[j + 1].split('\"')[1].split('\"')[0])
        }
      }
    }

    return result
   }
   
   var t = '{ "name":"zhangsan", "age":19, "running":false, "dog":null, "num":0.8, "le":-7}'

    console.log('模板', t)

    var list = scan(t)
    console.log('扫描后', list) 

    var result = setValue(list)
    console.log('结果', result)
