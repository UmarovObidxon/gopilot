import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../css/footer/footer.css';
import Nav from 'react-bootstrap/Nav';
export default function main123(props)  {
  return (
    <>
    <div className="footer">
 <div className=" col-xl-12 col-12  d-flex row text-center text-light">
  <div className="divfooter2  col-xl-3 col-6 col-md-3 col-sm-12 mt-2">
          <Card.Title className='lh-lg fs-5 fw-semibold'>{props.data.cardtitle1}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold'>{props.data.cardtitle2}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold'>{props.data.cardtitle3}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'> {props.data.Link20}</Card.Title>
          </div>
          <div className="divfooter2   col-xl-3 col-md-3 col-sm-12 mt-2">
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link21}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link22}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link23}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link24}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link25}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link26}</Card.Title>
          </div>
          <div className="divfooter2  col-xl-3 col-md-3 col-sm-12 mt-2">
       
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link27}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link28}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link29}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link30}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link31}</Card.Title>
          <Card.Title className='lh-lg fs-5 fw-semibold link-light'>{props.data.Link32}</Card.Title>
          </div>
          <div className="divfooter2  col-xl-3 col-md-2 col-sm-12 mt-2 d-flex gap-3 ">
          <span><i class="footericon fa-brands fa-facebook-f fs-2"></i></span>
          <span><i class="footericon fa-brands fa-instagram fs-2"></i></span>
          <span><i class="footericon fa-brands fa-twitter fs-2"></i></span>
          <span><i class="footericon fa-brands fa-linkedin-in fs-2"></i></span>
          <span><i class="footericon fa-brands fa-youtube fs-2"></i></span>
          </div>

        <div className="containerbody2"></div>
             <div className="footerdiv1  col-xl-12 col-md-12 col-sm-12 row gap-5  justify-content-md-start d-flex ">
            
                <div className="col-xl-1 col-md-4 col-sm-5 col-5 mt-2 "><img className='card-img img-fluid' src={props.data.imga} alt="" /></div>
                <div className="col-xl-1 col-md-4 col-sm-5 col-5 mt-2"><img className='card-img img-fluid' src={props.data.imgb} alt="" /></div>
            
                <div className="col-xl-1 col-md-4 col-sm-5 col-5 mt-2"> <img className='card-img img-fluid' src={props.data.imgd} alt="" /></div>
                <div className="col-xl-1 col-md-4 col-sm-5 col-5 mt-2"> <img className='card-img img-fluid' src={props.data.imgd} alt="" /></div>

           
               <div className="col-xl-1 col-md-4 col-sm-5 col-5 mt-2"><img className='card-img img-fluid' src={props.data.imge} alt="" /></div>
               <div className="col-xl-1 col-md-4 col-sm-5 col-5 mt-2"><img className='card-img img-fluid' src={props.data.imgr} alt="" /></div>      

            
             </div><div  className=' divfooter3 col-xl-12 col-md-12 col-sm-12 d-flex  text-center gap-3  justify-content-center'>
           <p className='navlink3 mt-3 text-secondary'>{props.data.footerp1}</p>
         <Nav.Link className='navlink3 mt-3  text-light fw-semibold' href="#">{props.data.Link33}</Nav.Link>
       <p className='navlink3 mt-3 text-secondary '>{props.data.footerp2}</p>
          <p><Nav.Link className='navlink3 mt-3 text-light fw-semibold' href="#">{props.data.Link34}</Nav.Link></p>
             </div>
 </div>
 </div>
    </>
  
  )
}
