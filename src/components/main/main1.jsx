import React from 'react'
import '../../css/main.css/main.css'
import Main2 from './main2'
import { obj } from '../../api/user'
import { Link,Outlet } from 'react-router-dom'
export default function main1({data}) {
  return (
    < >
    <div className='w-100  lolo mt-2'>
        <div className='w-100  d-flex justify-content-center align-items-ceter'>
            <div className='lolo1'>
            <h5>{data.z1}</h5>
            <p>{data.z2}</p></div>
        </div>

        <div className=' d-flex w-100  justify-content-center row gap-2'>
            <div className='col-xl-6 col-lg-6   d-flex justify-content-center align-items-center mt-3 lolo2'>
            <button className='mr-auto' type="button " class="btn btn-primary  btn4"><i class="fas fa-play-circle sol1"></i></button>
          
            </div>

            <div className='col-xl-5  col-lg-5 lolo3 ms-4  mt-3 d-flex '>
              <div className='col-l-12  mt-2  mt-4 '>
                <h4>{data.z3}</h4>
                <p>{data.z4}</p>
                <Link className='text-primary' to="/">{data.z5}</Link>
                <h4>{data.z6}</h4>
                <p>{data.z7}</p>
                <Link className='text-primary' to="/">{data.z8}</Link>
              </div>
              
            </div>
          <div className='col-xl-12  d-flex justify-content-center mt-4'>
          <div className='lolo1 '>
                    <Link className='text-primary fs-3'>{data.z9}</Link>
                     <p>{data.z10}</p></div>
          </div>


                <div className='w-100  d-flex lolo4 mt-2 row'>
                <div className='w-100  d-flex justify-content-center ms-1 align-items-ceter mt-2 lolo5'>
                  
                      </div>
                  <div className='col-xl-6 '>
                        <div className='col-xl-12 align-items-center   d-flex  '>
                          <img className='img-fluid img9' src={data.img5} alt="" />
                          <h2 className='mt-1'>{data.z11}</h2>
                       </div>
                       <div className='col-xl-12 mt-2  '>
                        <h4 className='fs-2'>{data.z12}</h4>
                        <p className='fs-5'>{data.z13}</p>
                       </div>
                       <div className='col-xl-12 '>
                        <Link className='fs-5 text-primary'>{data.z14}</Link>
                       </div>
                  </div>
                   

                     <div className='col-xl-6 d-flex mt-2 '>
                      <img className='img-fluid img10' src={data.img6} alt="" />
                     </div>
                </div>
                <div className='col-xl-12  row mt-4 d-flex '>
                     <div className='col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12'>
                      <img className='img-fluid img11' src={data.z15} alt="" />
                     </div>

                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm12 col-12'>
                      <div className='col-xl-12 mt-3 d-flex align-items-center'>
                        <img className='img-fluid img7' src={data.z16} alt="" />
                        <h2>{data.z17}</h2>
                      </div>
                      <div className='col-xl-10 ms-3 mt-2 '>
                        <h4>{data.z18}</h4>
                        <p className='fs-5'>{data.z19}</p>
                        <Link className='fs-4 text-primary' to="/">{data.z20}</Link>
                      </div>
                    </div>
                </div>

                <div className='col-xl-12  row mt-4  d-flex lolo8'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm12 col-12'>
                      <div className='col-xl-12 mt-3 d-flex align-items-center'>
                        <img className='img-fluid img7' src={data.img8} alt="" />
                        <h2>{data.z21}</h2>
                      </div>
                      <div className='col-xl-10 ms-3 mt-2 '>
                        <h4>{data.z22}</h4>
                        <p className='fs-5'>{data.z23}</p>
                        <Link className='fs-4 text-primary' to="/">{data.z24}</Link>
                      </div>
                    </div>
                     <div className='col-xl-6  col-lg-6 col-md-12 col-sm-12 col-12'>
                      <img className='img-fluid img11' src={data.img7} alt="" />
                     </div>
                </div>

                <div className='col-xl-12  row mt-2 bg-white d-flex '>
                     <div className='col-xl-6  col-lg-6 col-md-6 col-sm-12 col-12'>
                      <img className='img-fluid img11' src={data.img9} alt="" />
                     </div>

                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm12 col-12'>
                      <div className='col-xl-12 mt-3 d-flex align-items-center'>
                        <img className='img-fluid img7' src={data.img10} alt="" />
                        <h2>{data.z25}</h2>
                      </div>
                      <div className='col-xl-10 ms-3 mt-2 bg-white'>
                        <h4>{data.z26}</h4>
                        <p className='fs-5'>{data.z27}</p>
                        <Link className='fs-4 text-primary' to="/">{data.z28}</Link>
                      </div>
                    </div>
    
                    
                </div>
                <div className='bg-white mt-3'><Main2 data={obj}/></div>
        </div>
        
    </div>
    <Outlet/>
    </>
  )
}

