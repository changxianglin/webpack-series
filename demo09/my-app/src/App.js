import axios from 'axios'
import './App.css'

function App() {

  const upload = () => {
    console.log('点击上传文件按钮')
    findFile()
  }

  const findFile = () => {
    const dom = document.querySelector('.file')
    dom.click()
    console.log('触发上传文件 dom')
  }

  // body 参数
  const uploadBodyArgs = (file) => {
    const url = 'http://www.jbfsoft.net/jop-web/file/uploadNew'
    const form = new FormData()
    form.append('file', file.files[0])
    form.append('companyKey', '01');
    form.append('alias', 'appoint');
    axios.post(url, form)
  }

  // headers 参数
  const headersArgs = (file) => {
    let form = new FormData()
    form.append('file', file.files[0])
    const url = 'http://120.79.93.109:9010/upload/uploadImageFile'
    axios({
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'multipart/form-data',
        'category': 'COMM',
        'epid': '12D3868F-A44F-1AB3-0276-036A07F3F231',
      },
      data: form,
    })
  }

  const uploadFile = (e) => {
    const input = e.target
    console.log('找到上传文件', input.files[0])
    // uploadBodyArgs(input)
    headersArgs(input)
  }

  return (
    <div className="App">
      <div onClick={upload}>
         <span className="upload">上传文件</span>
         <input type="file" onClick={upload} className="file" onChange={uploadFile} />
      </div>
    </div>
  );
}

export default App;
