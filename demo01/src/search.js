'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import img from './images/img.png'
import './search.less'

class Search extends React.Component {

  render() {
    return <div className="search-text">
    Search Text Cotent test
    <img src = { img } />
    </div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)