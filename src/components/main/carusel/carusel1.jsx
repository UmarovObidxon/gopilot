
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../css/carusel.css'
const responsive = {
    0: { items: 1 },
    575: { items: 2 },
    1024: { items: 3 },
    1124: { items: 4 },
    2524: { items: 6 },
    3024: { items: 7 },
};

const  items = [
    <div className="item row  mt-5  divcard" data-value="1">
      <img className='img-fluid imgcarusel' src="	https://www.govpilot.com/hs-fs/hubfs/Atlantic-City.png?width=200&height=200&name=Atlantic-City.png" alt="" />
      <div className='bg-white text-center'>
        <h4>Atlantic City</h4>
        <p className='fs-5'>New jersey</p>
      </div>
    </div>,
    <div className="item  row mt-5 divcard" data-value="2">
      <img className='img-fluid imgcarusel' src="	https://www.govpilot.com/hs-fs/hubfs/Bexar%20County.png?width=200&height=200&name=Bexar%20County.png" alt="" />
      <div className='bg-white text-center'>
        <h4>Bexar Countiy</h4>
        <p className='fs-5'>Texas</p>
      </div>
  </div>,
    <div className="item row  mt-5 divcard" data-value="3">
      <img className='img-fluid imgcarusel' src="	https://www.govpilot.com/hubfs/Seal_of_Buffalo%2c_New_York.svg.webp" alt="" />
      <div className='bg-white text-center'>
        <h4>Bufallo</h4>
        <p className='fs-5'>New York</p>
      </div>
  </div>,
    <div className="item   mt-5 divcard" data-value="4">
        <img className='img-fluid imgcarusel' src="	https://www.govpilot.com/hs-fs/hubfs/Jackson-County.png?width=200&height=200&name=Jackson-County.png" alt="" />
        <div className='bg-white text-center'>
        <h4>Jackson County</h4>
        <p className='fs-5'>Mississippi</p>
      </div>
  </div>,
    <div className="item  mt-5 divcard" data-value="5">
    <img className='img-fluid imgcarusel' src="	https://www.govpilot.com/hubfs/Trenton.webp" alt="" />
    <div className='bg-white text-center'>
    <h4>Trenton</h4>
    <p className='fs-5'>New Jersey</p>
  </div>
</div>,
   
   <div className="item mt-5 divcard" data-value="6">
   <img className='img-fluid imgcarusel' src="https://www.govpilot.com/hubfs/Newark%20OH.webp" alt="" />
   <div className='bg-white text-center'>
   <h4>City of Newark</h4>
   <p className='fs-5'>Ohio</p>
 </div>
</div>,
          <div className="item mt-5 divcard" data-value="7">
          <img className='img-fluid imgcarusel' src="https://www.govpilot.com/hubfs/website-2022/Curry-County.webp" alt="" />
          <div className='bg-white text-center'>
          <h4>Curry County</h4>
          <p className='fs-5'>Oregon</p>
        </div>
    </div>,

];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);
export default Carousel;