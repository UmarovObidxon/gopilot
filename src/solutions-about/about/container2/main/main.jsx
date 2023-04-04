import React from 'react'
import { data1 } from '../../../api/user'
import About from '../../components2/main/about'
console.log(data1)


export default function main() {

  return (
    <div>
      <About data={data1}/>
    </div>
  )
}
