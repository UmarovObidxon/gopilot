import React from 'react'
import "../../css/header.css"
export default function header({data}) {
  return (<div className=''>

    <div className=' col-xl-12   d-flex headerdiv1 pb-5'>
        <div className=' div7 col-xl-6 col-lg-6 col-md-12 mt-2 col-sm-12 col-12 d-flex   justify-content-center'>
           <div className=' div8 col-xl-8 col-lg-9 col-md-8 col-sm-11 col-12 text-center mt-4  d-block  '>
           <h1 className='ms-3 text1 '>{data.a6}</h1>
           <h5 className='ms-3 text2 '>{data.a7}</h5> 
           <button type="button" class="btn ms-3 btn1">See How GovPilot Works </button>
           <button type="button" class="btn btn-warning ms-3 btn2">Get Demo</button>
     
          </div>
        </div>
        <div className=' col-xl-6 col-lg-6 col-md-12 col-sm12 mt-4 col-12 d-flex'>
            <img className='img5  img-fluid'  src="https://www.govpilot.com/hubfs/GP_Home_2-1.webp" alt="" />
            <img className='img6  img-fluid mt-5' src="	https://www.govpilot.com/hubfs/Government%20Procurement%20Software.webp" alt="" />
        </div>
       
    </div>
    
    </div>
    
  )
}
