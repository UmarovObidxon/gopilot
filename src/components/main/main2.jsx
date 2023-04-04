import React from 'react'
import '../../css/main.css/main2.css'
 import Slider from './carusel/slider'
 import { obj1 } from '../../api/user'
 import { Link, Outlet } from 'react-router-dom'
export default function main2({data}) {
  return (
    <>    <div className=' container-fluid '>
       <div className='w-100 d-flex  bg-white justify-content-center align-items-ceter'>
            <div className='lolo1 d-block'>
            <h2>{data.x1}</h2>
            <p className='fs-5'>{data.x2}</p>
            <Link className='fs-4 text-primary'  to="/">{data.x3}</Link>
            </div>
           
          
        </div>
        <div className='sliderz '><Slider data={obj1}/></div>


        <div className='col-xl-12 mt-5 uzagramz'>
        <div className='w-100 d-flex  justify-content-center align-items-ceter'>
            <div className='lolo1'>
            <h2>{data.x4}</h2>
            <p>{data.x5}</p>
            <button type="button" class="btn btn-primary mt-2 buttonx6">{data.x6}</button>
            </div>
        </div>

        <div className='col-xl-12 d-flex row  mt-4 '>
          <div className="col-xl-3 col-md-6 mt-4 col-sm-12 col-12 justify-content-center align-items-center d-flex">
            <div className=' text-center card card1'>
              <h2 className='mt-4'>{data.x7}</h2>
              <i class="fa-sharp fa-solid fa-medal medal1"></i>
              <p>{data.x8}</p>
            </div>
          </div>


          <div className="col-xl-3 col-md-6 mt-4 col-sm-12 col-12 justify-content-center align-items-center d-flex">
            <div className=' text-center card card1'>
              <h2 className='mt-4'>{data.x7}</h2>
              <i class="fa-sharp fa-solid fa-medal medal2"></i>
              <p>{data.x8}</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mt-4 col-sm-12 col-12 justify-content-center align-items-center d-flex">
            <div className='  text-center card card1'>
              <h2 className='mt-4'>{data.x7}</h2>
              <i class="fa-sharp fa-solid fa-medal medal3"></i>
              <p>{data.x8}</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12 col-12 mt-4 justify-content-center align-items-center d-flex">
            <div className=' text-center card card1'>
              <h2 className='mt-4'>{data.x7}</h2>
              <i class="fa-sharp fa-solid fa-medal medal4"></i>
              <p>{data.x8}</p>
            </div>
          </div>
        </div>

        </div>


        <div className='  mt-5'>
        <div className='w-100 d-flex  justify-content-center align-items-ceter'>
            <div className='lolo1 '>
            <h2>{data.x9}</h2>
            <p className='fs-5'>{data.x10}</p>
            <p className='fs-5'>{data.x11}</p>
        </div>
        </div>
        <div className=' bg-white col-xl-12 col-md-12 col-sm-12 col-12  d-flex  justify-content-center align-items-ceter   '>  
        <div className= 'd-flex col-12 justify-content-center align-items-ceter  '><input type="email" class="form-control  inppp" id="exampleFormControlInput1" placeholder="Government Email Addres" />
  <button type="button" class="btn btn-secondary ">SUBSCRIBE</button>
   </div>
         </div>

         <div className='col-xl-12 mt-5 bg-white'>
         <div class="row row-cols-1 row-cols-md-4 g-5 ">
  <div class="col col-xl-3 pomosh col-md-6 ">
    <div class="card ">
      <img src="	https://www.govpilot.com/hubfs/Asset%20Mgmt.png" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title text-secondary">By Beth Dacry on March 28,2023</h5>
        <h4 class="card-text">Local Government Asset Management Stragy 2023; Asset Aquistions</h4>
        <p className='card-tex text-secondary'>Managing local government assets is an essential part efficient government and...</p>
        <hr />
        <div className=' text-start d-flex'>
          <p className='card-text'>Tags:</p>
          <Link to="/" className='card-tetx text-primary'>Constituent Engagement,Government Efficiency.Constituent Experience, Digital Transformation,Blog American Rescue Health</Link>
        </div>
      </div>
    </div>
  </div>
  <div class="col pomosh col-xl-3 col-md-6">
    <div class="card">
      <img src="	https://www.govpilot.com/hubfs/Pet%20License.png" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title text-secondary">By Beth Dacry on March 28,2023</h5>
        <h4 class="card-text">Local Government Asset Management Stragy 2023; Asset Aquistions</h4>
        <p className='card-tex text-secondary'>Managing local government assets is an essential part efficient government and...</p>
        <hr />
        <div className=' text-start d-flex'>
          <p className='card-text'>Tags:</p>
          <Link to="/" className='card-tetx text-primary'>Constituent Engagement,Government Efficiency.Constituent Experience, Digital Transformation,Blog American Rescue Health</Link>
        </div>
      </div>
    </div>
  </div>

  <div class="col pomosh col-xl-3 col-md-6">
    <div class="card">
      <img src="	https://www.govpilot.com/hubfs/MicrosoftTeams-image%20%2828%29.png" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title text-secondary">By Beth Dacry on March 28,2023</h5>
        <h4 class="card-text">Local Government Asset Management Stragy 2023; Asset Aquistions</h4>
        <p className='card-tex text-secondary'>Managing local government assets is an essential part efficient government and...</p>
        <hr />
        <div className=' text-start d-flex'>
          <p className='card-text'>Tags:</p>
          <Link to="/" className='card-tetx text-primary'>Constituent Engagement,Government Efficiency.Constituent Experience, Digital Transformation,Blog American Rescue Health</Link>
        </div>
      </div>
    </div>
  </div>

  <div class="col pomosh col-xl-3 col-md-6 ">
    <div class="card">
      <img src="https://www.govpilot.com/hubfs/Equity.png" class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title text-secondary">By Beth Dacry on March 28,2023</h5>
        <h4 class="card-text">Local Government Asset Management Stragy 2023; Asset Aquistions</h4>
        <p className='card-tex text-secondary'>Managing local government assets is an essential part efficient government and...</p>
        <hr />
        <div className=' text-start d-flex'>
          <p className='card-text'>Tags:</p>
          <Link to="/" className='card-tetx text-primary'>Constituent Engagement,Government Efficiency.Constituent Experience, Digital Transformation,Blog American Rescue Health</Link>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className='w-100 d-flex  justify-content-center align-items-ceter'>
            <div className='lolo1 mt-4'>
            <Link to="/" className='fs-5 text-primary'>{data.zeus}</Link>
        </div>
        </div>
         </div>

            </div>
           
    </div>
   <Outlet/>
    </>

  )
}


