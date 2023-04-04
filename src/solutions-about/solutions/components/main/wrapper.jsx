import React from 'react'
import '../../../style/stlye1/main/wrapper.css'
import { Link,Outlet } from 'react-router-dom'
export default function wrapper({data}) {
    console.log(data)
  return (
    <div className='w-100 d-flex justify-content-center'>
 <div className='wrapper-father d-flex border-top justify-content-center container-lg container-fluid w-100 p-0'>
  <div className='wrapper w-100 d-flex flex-column justify-content-center'>
    <div className='wrapper-form w-100 d-flex align-items-center'> 
    <form action="" className='bg-white  wrapper-form-child rounded border border-dark-subtle d-flex align-items-center justify-content-evenly col-xl-5 col-md-6 col-sm-12 col-12'>
      <input onKeyUp={search}id='inp' className='col-lg-11 col-xl-11  col-md-11 col-sm-11 col-11 border border-0' type="text" placeholder='search for solutions'></input>
      <i class="fa-solid fa-magnifying-glass"></i>
      </form>
    </div>
    <ul id='myUL' className='wrapper-child-div row w-100 gap-4 d-flex flex-wrap'>
      
        <li className="wrapper-child rounded"><Link to="/" className="btn wrapper-child-btn  text-center text-success fw-semibold  px-3 fs-5">{data[1].li1}</Link ></li>
        <li className="wrapper-child rounded"><Link to="/" className="btn wrapper-child-btn  text-center text-success fw-semibold  px-3 fs-5">{data[1].li2}</Link ></li>
        <li className="wrapper-child rounded"><Link to="/" className="btn wrapper-child-btn  text-center text-success fw-semibold  px-3 fs-5">{data[1].li3}</Link></li>
        <li className="wrapper-child rounded"><Link to="/" className="btn wrapper-child-btn  text-center text-success fw-semibold  px-3 fs-5">{data[1].li4}</Link ></li>
        <li className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li5}</Link ></li>
        <li className="wrapper-child  rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5 ">{data[1].li6}</Link></li>
        <li className="wrapper-child  rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li7}</Link ></li>
        <li className="wrapper-child  rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li8}</Link ></li>
        <li className="wrapper-child  rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li9}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li10}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li11}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li12}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li13}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li14}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li15}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li16}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li17}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li18}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li19}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li20}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li21}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li22}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li23}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li24}</Link ></li>
        <li  className="wrapper-child rounded"><Link to="/" className=" wrapper-child-btn btn text-center fw-semibold  px-3 fs-5">{data[1].li25}</Link ></li>
        
         </ul>
  </div>
 </div>
 <Outlet/>
 </div>

  )
}
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("inp");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a =li[i].getElementsByClassName("wrapper-child-btn")[0];
    
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

