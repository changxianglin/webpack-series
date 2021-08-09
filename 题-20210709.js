// 实现 JSON.parse 功能
// 注释写明代码实现思路
const parse = (s) => {
  // s 是一个 JSON 格式的字符串
  // 解析 s, 返回相应的 JSON 对象格式
  // 1. 数字需要考虑负数和小数
  // 2. 字符串需要考虑转义字符
  // 3. 考虑嵌套数组和对象
  // 4. 需要加上布尔值和 null
};

// 注释写明代码实现思路
const htmlParse = (htmlSrc) => {
  // htmlSrc 是一个 html 字符串
  // 解析 htmlSrc, 返回相应的数据格式
  // 具体数据格式见如下例子
  // htmlSrc
  // <div id="root">
  //   <div className="test" data-option="1">
  //     <p>hello 2</p>
  //     <input type="text" value="hello 3">
  //   </div>
  // </div>
  // 对应的数据格式
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
};
