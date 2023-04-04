import React, { Component } from 'react'
import Main1 from '../../components/main/main1'
import { obj } from '../../api/user'
export default class main extends Component {
  render() {
    return (
      <div>
<Main1 data={obj}/>

      </div>
    )
  }
}

