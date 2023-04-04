
import React, { Component } from 'react'
import Header from '../../Studies/header/header'
import { obj4 } from '../../api/Studies/user'
export default class Studies extends Component {
  render() {
    return (
      <div>
        <Header data={obj4}/>
      </div>
    )
  }
}


