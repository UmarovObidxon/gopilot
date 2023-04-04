import React, { Component } from 'react'
import Header from '../../containers/header/header'
import Main from '../../containers/main/main'
export default class page extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}
