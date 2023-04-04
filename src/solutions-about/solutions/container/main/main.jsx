import React from 'react'
import Wrapper from '../../components/main/wrapper'
import { data } from '../../../api/user'
export default function main() {
  return (
    <div>
        <Wrapper data={data}/>
    </div>
  )
}
