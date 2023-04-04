import React from 'react'
import '../../../style/style2/header/header.css'
export default function header({data}) {
  return (
    <div>
<div class="card about border-0 rounded-0 text-bg-dark">
  <img src={data[0].img} class="card-img about-img rounded-0" alt="..."/>
  <div class="card-img-overlay about-text col-xl-7 col-md-10 col-sm-12 col-12  pt-5 ">
    <h5 class="card-title fs-1">{data[0].h3}</h5>
    <p class="card-text fs-5 ">{data[0].p}</p>
  </div>
</div>
    </div>
  )
}
