import React from 'react'
import '../../css/header.css'
import Carousel from '../main/carusel/carusel1'
import { Link, Outlet } from 'react-router-dom'
export default function header2({data}) {
  return (
    <>
     <div className='col-xl-11  row  mx-auto mt-3  container-lg gap-5  div9'>
          
      <div className='border border-0 card col-xl-5 col-lg-5 col-md-5 d-flex div10 bg-white gap-2'>
       <div className='col-xl-12   mt-2 d-flex div12 '>
        <div className='col-xl-3 col-lg-3 col-sm-3 col-3'>
         <img className='img-fluid ' src={data.img2} alt="" />
        </div>
        <div className='col-xl-8 col-lg-7  ms-3 '>
         <h5 className='card-title'>{data.a8}</h5>
         <p className='card-text'>{data.a9}</p>
        </div>
       </div>
    <div className='col-xl-12 '>  
        <ul>
       <li>
        <Link to="/" className='text-primary card-text'>{data.a10}</Link>
        </li>
       <li className='card-text'>{data.a11}</li>
       <li  className='card-text'>{data.a12}</li>
       <li  className='card-text'>{data.a13}</li>
       <li  className='card-text'>{data.a14}</li>
     </ul></div>
   </div>

    <div className='col-xl-5 card border border-0 col-lg-5 col-md-5 bg-white div11'>
    <div className='col-xl-12 mt-2  d-flex div12'>
     <div className='col-xl-3 col-lg-3 col-sm-3 col-3'>
       <img className='img-fluid ' src={data.img3} alt="" />
     </div>
     <div className='col-xl-8  ms-3 '>
       <h5 className='card-title'>{data.a15}</h5>
       <p className='card-text'>{data.a16}</p>
     </div>
    </div>

     <div className='col-xl-10 mt-3  d-flex'>
      <p className='card-text'>{data.a17}</p>
     </div>

    </div>
   
 </div>
 <div className='w-100  div13'>
 <div className='w-100 d-flex justify-content-center align-items-ceter'>
            <div className='lolo1'>
            <h2>Trusted by Local Governments</h2>
            </div>
        </div>
    <Carousel/>
 </div>
    <Outlet/>

 </>
  )
}
