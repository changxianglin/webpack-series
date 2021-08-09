const log = console.log.bind(console);

log("htmlparse start");

var i = 0;

const readTag = (code) => {
  var index = i;
  while (true) {
    var c = code[index];
    index += 1;
    if (c == " ") {
      var s = code.slice(i + 1, index - 1);
      i = index - 1;
      return s;
    } else if (c == ">") {
      var s = code.slice(i + 1, index - 1);
      i = index - 1;
      return s;
    }
  }
};

const readAttr = (code) => {
  var index = i;
  while (true) {
    var c = code[index];
    index += 1;
    if (c == " " || c == ">") {
      var s = code.slice(i + 1, index - 1);
      // log("属性", s);
      i = index - 1;
      return s;
    } else if (c == "=") {
      var s = code.slice(i, index - 1);
      // log("属性", s);
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
    if (e == "<") {
      var e = readTag(code);
      var t = {
        type: "tagName",
        value: e,
      };
      ts.push(t);
    } else if (e.trim()) {
      var e = readAttr(code);
      var t = {
        type: "attrs",
        value: e,
      };
      ts.push(t);
    } else if (e == ">") {
      // log("闭合或者结束");
    } else {
      log("wrong tokens");
    }

    i += 1;
  }

  return ts;
};

const parseJson = (tokenlist) => {
  var m = [];
  tokenlist.map((item, index) => {
    if (item.type == "tagName" && item.value.indexOf("/") == -1) {
      if (!index) {
        m.push({
          tagName: item.value,
          attrs: {},
          children: [],
        });
      }
    } else if (item.type == "attrs") {
      // log("设置属性");
    }
  });

  return m;
};

const htmlParse = () => {
  // var s = `
  // <div id="root">
  // <div className="test" data-option="1">
  // </div>
  // </div>
  // `;

  // var s = `
  // <div id="root">
  // <div className="test" data-option="1">
  // <p>hello 2</p>
  // </div>
  // </div>
  // `;

  var s = `
  <div id="root">
  <div className="test" data-option="1">
  <p>hello 2</p>
  <input type="text" value="hello 3">
  </div>
  </div>
  `;

  var ts = tokens(s);
  // log("ts", ts);
  // var tl = new TokenList(ts);
  var d = parseJson(ts);
  // log("end", d);
};

htmlParse();
