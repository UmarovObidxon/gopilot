import React from 'react'
import Header from '../../components2/header/header'
import { data1 } from '../../../api/user'


export default function header() {

  return (
    <div>
        <Header data={data1}/>
    </div>
  )
}
