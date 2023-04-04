import React from 'react'
import '../../../style/style2/main/about.css'
export default function about({data}) {
    console.log(data[1])
  return (
    <div>
        <div className='pt-3 d-flex flex-column align-items-center'>
            <div className='text-center  col-xl-6'>
                <p className="fs-3"> {data[1].p1} </p>
                <p className='lh-sm'><span>{data[1].span}</span> <i>{data[1].i}</i>   {data[1].p2}</p>
            </div>
            <div className='text-center col-xl-6'>
                <p className="lh-sm">{data[1].p3}</p>
            </div>
        </div>
        <div className='d-flex about-div m-auto container-fluid py-3  gap-3 flex-wrap'>
        <div class="card " >
  <img src={data[2].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card " >
  <img src={data[3].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card " >
  <img src={data[4].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" >
  <img src={data[5].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card " >
  <img src={data[6].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card " >
  <img src={data[7].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div class="card " >
  <img src={data[8].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" >
  <img src={data[9].img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div>

<div className=' col-xl-12 mt-5 d-flex justify-content-center ss2'>
          <div className='col-xl-2 col-md-3 col-sm-3 d-flex d-none d-sm-flex ss1 align-items-center justify-content-center'>
            <img className='img-fluid imgdiv' src={data[10].img} alt="" />
          </div>
          
          <div className=' col-xl-9 col-md-8 col-sm-8 col-10 d-flex flex-column justify-content-center'>
            <small className='ms-3 '>{data[10].p}</small>
            <h5 className='ms-3 mt-4 text-black'>{data[10].h5}</h5>
            <p className='ms-3 '>{data[10].p1}</p>
          </div>
        </div>



        </div>
    </div>
  )
}
