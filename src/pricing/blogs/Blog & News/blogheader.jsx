import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap'
// import Nav from "../../components/nav"
import "../../css/blogheader.css/blogheader.css"

import Pagination from 'react-bootstrap/Pagination';

export default function blogheader(props) {


    return (
  
 
    <>       
    {/* <Container> <Nav data={obj}/></Container> */}
 
   <Container fluid className='col-xl-12 col-sm-12 row mx-auto'>

     <div className="containerbody" >

     <div className=" col-xl-12 row">
        <h1 className='text-lowercase text-secondary'>{props.data.h1}</h1>
     </div></div>

     <div className="containerbody" >
      <div className="col-xl-12 row d-flex">
        <h3 className='col-xl-3 subscribeblog mb-4'>{props.data.h3}</h3>
        {/* email div */}
        <div class="form-floating mb-3 col-xl-2 ">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">{props.data.Email}</label>
</div>



{/* submit input */}
<input className='submit1 col-xl-1 border border-light-subtle text-secondary' type="submit" value={props.data.Subscribe} /></div>
  {/* links div */}
<div className='lidiv col-xl-12 col-sm-12 col-md-12 row   '>
  <ul className='ul1 d-flex'>
  <li className='Link3  ms-3  '><Nav.Link>{props.data.Link6}</Nav.Link></li>
  <li className='Link2 ms-3  '><Nav.Link>{props.data.Link7}</Nav.Link></li>
  <li className='Link2 ms-3   '><Nav.Link>{props.data.Link8}</Nav.Link></li>
  <li className='Link2 ms-3   '><Nav.Link>{props.data.Link9}</Nav.Link></li>
  </ul>
</div>
     </div>
   
   {/* cards */}
  
   {/* card1 */}
      <Card className='basicard col-xl-4 col-md-6 col-sm-12 border-0 ' >
      <Card.Img variant="top" src={props.data.img2} />
      <Card.Body>
        <div className='spans d-flex'><span>{props.data.span1}</span><Nav.Link className='ms-2 text-secondary'>{props.data.Link10}</Nav.Link><span className='ms-2 text-secondary'>{props.data.span2}</span></div>
        <div className='div1'></div>
        <Card.Text>
                 <div className=' d-flex'><h2><Nav.Link className='Link4 text-secondary'>{props.data.Link11}</Nav.Link></h2></div>
        </Card.Text>
        <div className='d-inline-block'><h2 className=' fs-6  '><span className=''>{props.data.Link16}</span></h2> <p className='fs-6 d-inline'> {props.data.p}</p></div>
      
      </Card.Body>
     
      <Card.Body>
      <Card.Text> <p className='text-secondary  border-top border-secondary border-opacity-25'>{props.data.p2}</p> </Card.Text>
      <ListGroup variant="flush">
    
      <div className='d-inline-flex col-xl-12  '><p>
      <span className=' col-xl-12 col-sm-12'>{props.data.span3}</span>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link12}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link13}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link14}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link15}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link17}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link18}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link19}</Nav.Link></p></div>
      </ListGroup>
      </Card.Body>
    </Card>
    {/* card2 */}
    <Card className='basicard col-xl-4 col-md-6 col-sm-12 border-0 ' >
      <Card.Img variant="top" src={props.data.img2} />
      <Card.Body>
        <div className='d-flex'><span>{props.data.span1}</span><Nav.Link className='ms-2 text-secondary'>{props.data.Link10}</Nav.Link><span className='ms-2 text-secondary'>{props.data.span2}</span></div>
        <div className='div1'></div>
        <Card.Text>
                 <div className=' d-flex'><h2><Nav.Link className='fs-5 text-secondary'>{props.data.Link11}</Nav.Link></h2></div>
        </Card.Text>
        <div className='d-inline-block'><h2 className=' fs-6  '><span className=''>{props.data.Link16}</span></h2> <p className='fs-6 d-inline'> {props.data.p}</p></div>
      
      </Card.Body>
     
      <Card.Body>
      <Card.Text> <p className='text-secondary  border-top border-secondary border-opacity-25'>{props.data.p2}</p> </Card.Text>
      <ListGroup variant="flush">
    
      <div className='d-flex col-xl-12 col-sm-12 '><p>
      <span className=''>{props.data.span3}</span>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link12}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link13}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link14}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link15}</Nav.Link></p></div>
      </ListGroup>
      </Card.Body>
    </Card>
    {/* card3 */}
    <Card className='basicard col-xl-4 col-md-6 col-sm-12 border-0  ' >
      <Card.Img variant="top" src={props.data.img2} />
      <Card.Body>
        <div className='d-flex'><span>{props.data.span1}</span><Nav.Link className='ms-2 text-secondary'>{props.data.Link10}</Nav.Link><span className='ms-2 text-secondary'>{props.data.span2}</span></div>
        <div className='div1'></div>
        <Card.Text>
                 <div className=' d-flex'><h2><Nav.Link className='fs-5 text-secondary'>{props.data.Link11}</Nav.Link></h2></div>
        </Card.Text>
        <div className='d-inline-block'><h2 className=' fs-6  '><span className=''>{props.data.Link16}</span></h2> <p className='fs-6 d-inline'> {props.data.p}</p></div>
      
      </Card.Body>
     
      <Card.Body>
      <Card.Text> <p className='text-secondary  border-top border-secondary border-opacity-25'>{props.data.p2}</p> </Card.Text>
      <ListGroup variant="flush">
    
      <div className='d-flex col-xl-12  '><p>
      <span className=''>{props.data.span3}</span>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link12}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link13}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link14}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link15}</Nav.Link></p></div>
      </ListGroup>
      </Card.Body>
    </Card>
       {/* card4 */}

    <Card className='basicard d-inline-flex col-xl-4 col-md-6 col-sm-12 border-0 ' >
      <Card.Img variant="top" src={props.data.img2} />
      <Card.Body>
        <div className='d-flex'><span>{props.data.span1}</span><Nav.Link className='ms-2 text-secondary'>{props.data.Link10}</Nav.Link><span className='ms-2 text-secondary'>{props.data.span2}</span></div>
        <div className='div1'></div>
        <Card.Text>
                 <div className=' d-flex'><h2><Nav.Link className='fs-5 text-secondary'>{props.data.Link11}</Nav.Link></h2></div>
        </Card.Text>
        <div className='d-inline-block'><h2 className=' fs-6  '><span className=''>{props.data.Link16}</span></h2> <p className='fs-6 d-inline'> {props.data.p}</p></div>
      
      </Card.Body>
     
      <Card.Body>
      <Card.Text> <p className='text-secondary  border-top border-secondary border-opacity-25'>{props.data.p2}</p> </Card.Text>
      <ListGroup variant="flush">
    
      <div className='d-flex col-xl-12  '><p>
      <span className=''>{props.data.span3}</span>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link12}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link13}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link14}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link15}</Nav.Link></p></div>
      </ListGroup>
      </Card.Body>
    </Card>
       
       {/* card5 */}
    <Card className='basicard col-xl-4 col-md-6 col-sm-12 border-0 ' >
      <Card.Img variant="top" src={props.data.img2} />
      <Card.Body>
        <div className='d-flex'><span>{props.data.span1}</span><Nav.Link className='ms-2 text-secondary'>{props.data.Link10}</Nav.Link><span className='ms-2 text-secondary'>{props.data.span2}</span></div>
        <div className='div1'></div>
        <Card.Text>
                 <div className=' d-flex'><h2><Nav.Link className='fs-5 text-secondary'>{props.data.Link11}</Nav.Link></h2></div>
        </Card.Text>
        <div className='d-inline-block'><h2 className=' fs-6  '><span className=''>{props.data.Link16}</span></h2> <p className='fs-6 d-inline'> {props.data.p}</p></div>
      
      </Card.Body>
     
      <Card.Body>
      <Card.Text> <p className='text-secondary  border-top border-secondary border-opacity-25'>{props.data.p2}</p> </Card.Text>
      <ListGroup variant="flush">
    
      <div className='d-flex col-xl-12  '><p>
      <span className=''>{props.data.span3}</span>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link12}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link13}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link14}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link15}</Nav.Link></p></div>
      </ListGroup>
      </Card.Body>
    </Card>
       
          {/* card6 */}
           <Card className='basicard col-xl-4 col-md-6 col-sm-12 border-0  ' >
      <Card.Img variant="top" src={props.data.img2} />
      <Card.Body>
        <div className='d-flex'><span>{props.data.span1}</span><Nav.Link className='ms-2 text-secondary'>{props.data.Link10}</Nav.Link><span className='ms-2 text-secondary'>{props.data.span2}</span></div>
        <div className='div1'></div>
        <Card.Text>
                 <div className=' d-flex'><h2><Nav.Link className='fs-5 text-secondary'>{props.data.Link11}</Nav.Link></h2></div>
        </Card.Text>
        <div className='d-inline-block'><h2 className=' fs-6  '><span className=''>{props.data.Link16}</span></h2> <p className='fs-6 d-inline'> {props.data.p}</p></div>
      
      </Card.Body>
     
      <Card.Body>
      <Card.Text> <p className='text-secondary  border-top border-secondary border-opacity-25'>{props.data.p2}</p> </Card.Text>
      <ListGroup variant="flush">
    
      <div className='d-flex col-xl-12 '><p>
      <span className=''>{props.data.span3}</span>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link12}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link13}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex ms-1  fw-semibold' href="#">{props.data.Link14}</Nav.Link>
        <Nav.Link className='navlink2 d-inline-flex  fw-semibold' href="#">{props.data.Link15}</Nav.Link></p></div>
      </ListGroup>
      </Card.Body>
    </Card>

     <div className='containerbody'></div>
   {/* pagination */}
    <div className="col-xl-12  d-flex  justify-content-center ">
      



    {/* <nav className='' aria-label="...">
  <ul class="pagination d-flex col-xl-12 col-sm-12">
  <li class="page-item active bg-dark" aria-current="page">
      <a class="page-link bg-dark" href="http://localhost:3000/">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="http://localhost:3000/">2</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="http://localhost:3000/">3</a>
    </li>
    <li class="page-item"><a class="page-link" href="http://localhost:3000/">3</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="http://localhost:3000/">4</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="http://localhost:3000/">5</a>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="http://localhost:3000/">...</a>  </li>
      <li class="page-item active" aria-current="page">
      <a class="page-link" href="http://localhost:3000/">58</a> </li>
      <li class="page-item active" aria-current="page">
      <a class="page-link" href="http://localhost:3000/">/</a>  </li>
  
   
  
      </ul>     
</nav> */}
 

 
 <Pagination  className='gap-4 mt-2'>
      <Pagination.Item active>{1}</Pagination.Item>
   

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item >{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item >{58}</Pagination.Item> 

    
    
      <Pagination.Next className='paginationnext' disabled/>
    
    </Pagination>
 
    </div>
       


   </Container>
   </>

  )
}
