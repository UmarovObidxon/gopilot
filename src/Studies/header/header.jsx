import React from 'react'
import '../css/header.css'
export default function header({data}) {
  console.log(data)
  return (
 <>
      <div className='col-xl-12 Studies'>
      <div class="card text-bg-dark border border-0">
  <img src="	https://www.govpilot.com/hubfs/case_study_header2-1.png" class="card-img im1" alt="..."/>
  <div class="card-img-overlay mt-4 col-xl-6 col-md-8">
    <h1 class="card-title text-dark">{data.m1}</h1>
    <p class="card-text text-dark ">{data.m2}</p>
    <p class="card-text text-dark"><small>{data.m3}</small></p>
  </div>
</div>
      </div>
      <div className='col-xl-12 bg-white d-flex axa2 container-fluid  mt-4'>
        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '>
          <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="https://www.govpilot.com/hubfs/about_sub_05-1.png" alt="" />
          </div>
          <div className='col-xl-12 col-md-9 col-sm-8 col-7  h-25 '>
              <h4 className='ms-4 mt-2 '>{data.m4}</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-4  col-md-6 col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-4 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4 ' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div>

           
        </div>

        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '> <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="	https://www.govpilot.com/hubfs/home_sub_building-2.png" alt="" />
          </div>
          <div className='col-xl-9 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>BUILDING & CONSTRUCTION</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-6 col-md-6   col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1 ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div></div>
      </div>

      {/* 2chi div */}
      
      <div className='col-xl-12 bg-white d-flex axa2 container-fluid  mt-4'>
        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '>
          <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="	https://www.govpilot.com/hubfs/cs_03_pet-2.png" alt="" />
          </div>
          <div className='col-xl-12 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>CLERKS' DEPARTMENT</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-4  col-md-6 col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-4 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4 ' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div>

           
        </div>

        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '> <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="	https://www.govpilot.com/hubfs/Home_gis.png" alt="" />
          </div>
          <div className='col-xl-9 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>CODE ENFORCEMENT</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-6 col-md-6   col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1 ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div></div>
      </div>

      {/* 3chi div */}

       <div className='col-xl-12 bg-white d-flex axa2 container-fluid  mt-4'>
        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '>
          <div className='col-xl-3 col-md-3 col-sm-4 col-5 d-flex'>
            <img className='img-fluid' src="https://www.govpilot.com/hubfs/home_sub_license.png" alt="" />
          </div>
          <div className='col-xl-12 col-md-9 col-sm-8 col-7  h-25 '>
              <h4 className='ms-4 mt-2 '>ECONOMIC DEVELOPMENT</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-4  col-md-6 col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-4 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4 ' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div>

           
        </div>

        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '> <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="	https://www.govpilot.com/hubfs/MicrosoftTeams-image%20%2823%29.png" alt="" />
          </div>
          <div className='col-xl-9 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>EMERGENCY MANAGEMENT</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-6 col-md-6   col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1 ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div></div>
      </div>

      {/* 4chi div */}

      <div className='col-xl-12 bg-white d-flex axa2 container-fluid  mt-4'>
        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '>
          <div className='col-xl-3 col-md-3 col-sm-4 col-5 d-flex'>
            <img className='img-fluid' src="https://www.govpilot.com/hubfs/cs_06_report-1.png" alt="" />
          </div>
          <div className='col-xl-12 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>HOUSING</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-4  col-md-6 col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-4 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4 ' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div>

           
        </div>

        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '> <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="https://www.govpilot.com/hubfs/sub_it_03.png" alt="" />
          </div>
          <div className='col-xl-9 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>INFORMATION TECHNOLOGY (IT)</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-6 col-md-6   col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1 ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div></div>
      </div>

      {/* 5chi div */}

      <div className='col-xl-12 bg-white d-flex axa2 container-fluid  mt-4'>
        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '>
          <div className='col-xl-3 col-md-3 col-sm-4 col-5 d-flex'>
            <img className='img-fluid' src="https://www.govpilot.com/hubfs/cs_05_zone-1.png" alt="" />
          </div>
          <div className='col-xl-12 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>PLANNING & ZONING</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-4  col-md-6 col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-4 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4 ' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div>
        </div>

        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '> <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="	https://www.govpilot.com/hubfs/lhi_housing-3.png" alt="" />
          </div>
          <div className='col-xl-9 col-md-9 col-sm-8 col-7 h-25 '>
              <h4 className='ms-4 mt-2 '>REGISTRAR DEPARTMENT</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-6 col-md-6   col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1 ms-4 ' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div></div>
      </div>

      {/* 6chi div */}

      <div className='col-xl-12 bg-white d-flex axa2 container-fluid  mt-4'>
        <div className='col-xl-6 col-md-12 mt-4 col-sm-12 col-12 d-flex '>
          <div className='col-xl-3 col-md-3 col-sm-4  d-flex'>
            <img className='img-fluid' src="	https://www.govpilot.com/hubfs/Untitled%20design-Jan-14-2021-11-40-46-84-PM.png" alt="" />
          </div>
          <div className='col-xl-12 col-md-9 col-sm-8 col-7  h-25 '>
              <h4 className='ms-4 mt-2 '>REAL ESTATE AUCTIONS</h4>
              <div className='col-xl-12 d-flex axa1 bg-white'>
               <div className='col-xl-4  col-md-6 col-sm-12 col-12 col-md-6 col-sm-4'>
               <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
                <a className='ax1  ms-4' href="">{data.m5}</a>
                <p className='ms-4'>{data.m6}</p>
               </div>
                  <div className='col-xl-4 col-md-6 col-sm-12 col-12'>
                  <a className='ax1  ms-4 ' href="">{data.m7}</a>
                <p className='ms-4'>{data.m8}</p>
                  </div>
              </div>
            </div>
        </div>
        </div>

        <div className='col-xl-12 mt-5 d-flex justify-content-center ss2'>
          <div className='col-xl-2 col-md-3 col-sm-3 d-flex d-none  d-sm-flex ss1 align-items-center justify-content-center'>
            <img className='img-fluid imgdiv' src="	https://www.govpilot.com/hubfs/about_testi_02.png" alt="" />
          </div>
          
          <div className=' col-xl-9 col-md-8 col-sm-8 col-10 d-flex flex-column justify-content-center'>
            <p className='ms-3 fs-5 '>{data.m9}</p>
            <h5 className='ms-3'>{data.m10}</h5>
            <p className='ms-3 fs-5'>{data.m11}</p>
          </div>
        </div>
 </>

  )
}

