  // <div id="root">
  //   <div className="test" data-option="1">
  //     <p>hello 2</p>
  //     <input type="text" value="hello 3">
  //   </div>
  // </div>

  // const exampleResult = [
  //   {
  //     tagName: 'div',
  //     attrs: {
  //       id: 'root'
  //     },
  //     children: [
  //       {
  //         tagName: 'div',
  //         attrs: {
  //           class: 'test',
  //           'data-option': '1',
  //         },
  //         children: [
  //           {
  //             tagName: 'p',
  //             attrs: {},
  //             children: [],
  //           },
  //           {
  //             tagName: 'input',
  //             attrs: {
  //               type: 'text',
  //               value: 'hello 3'
  //             },
  //             children: [],
  //           }
  //         ],
  //       }
  //     ],
  //   }
  // ]

console.log('解析html')

function jxi(html) {
  var result = []
  var counter = 0
  const obj = {}
  for (let index = 0; index < html.length; index++) {
    const element = html[index];
    if (element == ' ') {
      console.error('标签', html.slice(counter, index))
      console.log(html.slice(counter, index))
      const tag = html.slice(counter, index).split('<')[1]
      console.log('值', tag) 
      obj.tagName = tag
      counter = index
    } else if (element == '=') {
      console.log('需要切割一次')
      console.error('属性', html.slice(counter, index))
      counter = index
    }

    
  }

  console.log('进行中', result)
  // result.push({
  //   tagName: 'div',
  //   attrs: {
  //     id: 'root'
  //   },
  //   children: [
  //     {
  //       tagName: 'div',
  //       attrs: {
  //         class: 'test',
  //         'data-option': '1',
  //       },
  //       children: [
  //         {
  //           tagName: 'p',
  //           attrs: {
  //             type: 'text',
  //             value: 'hello 2'
  //           },
  //           children: [],
  //         },
  //         {
  //           tagName: 'input',
  //           attrs: {
  //             type: 'text',
  //             value: 'hello 3'
  //           },
  //           children: [],
  //         },
  //       ]
  //     }
  //   ]
  // })

}

var html = '<div id="root"><div className="test" data-option="1"><p>hello 2</p><input type="text" value="hello 3"></div></div>'

jxi(html)