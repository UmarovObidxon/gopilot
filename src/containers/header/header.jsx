import React, { Component } from 'react'
import Header from '../../components/header/header'
import Header2 from '../../components/header/header2'
import { obj } from '../../api/user'

export default class header extends Component {
  render() {
    return (
      <div>
        <Header data={obj}/>
        <Header2 data={obj}/>
        
      </div>
    )
  }
}
