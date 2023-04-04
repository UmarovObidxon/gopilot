import React from 'react'

import { data } from '../../../api/user'
import Text from '../../components/header/text'
export default function header() {

  return (
    <div>
<Text data={data}/>

    </div>
  )
}
