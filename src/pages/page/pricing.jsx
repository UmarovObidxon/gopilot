import React, { Component } from 'react'
import Pricingmain from '../../pricing/blogs/pricing-page/pricingmain'
import { Pricing } from '../../pricing/AP/user'
export default class pricing extends Component {
  render() {
    return (
      <div className='mt-5'>
        <Pricingmain data={Pricing}/>
      </div>
    )
  }
}

