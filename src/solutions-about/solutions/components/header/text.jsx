import React from 'react'
import '../../../style/stlye1/header/text.css'
export default function text({data}) {
    console.log(data)
  return (
    <div className='d-block'>
    <div className=' d-flex w-100 justify-content-center'>
    <div className='text row col-xl-11 col-md-10 col-sm-11 col-11  d-flex flex-column  justify-content-evenly'>
       <div className="col-xl-12 col-md-12 col-sm-12 col-12 ">
        <h1 className="">{data[0].h3}</h1>
       </div>
       <div className="col-xl-12 col-md-12 col-sm-12 col-12 ">
        <p className="">{data[0].p}</p>
       </div>
       <div className="col-xl-12 col-md-12 col-sm-12 col-12 ">
        <p className="">{data[0].p1}</p>
       </div>
       <div className="col-xl-12 col-md-12 col-sm-12 col-12 ">
        <h5 className="">{data[0].h5} <i>{data[0].i}</i> </h5>
       </div>
       <div className="col-xl-8 col-md-12 col-sm-12 col-12 ">
        <p className="">{data[0].p2}</p>
       </div>
    
    </div>
    
    </div>
    </div>
  )
}
