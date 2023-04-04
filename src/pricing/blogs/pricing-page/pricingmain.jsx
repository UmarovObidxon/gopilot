import React from 'react'
import '../../css/pricing.css/pricing.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';


export default function pricingmain(props) {

  return (
    <>
    <div className="container-fluid row  mx-auto col-xl-12">
      <div className="containerbody3 mt-3">  </div>
             <div className="d-flex  col-xl-12 col-md-12 col-sm-12 justify-content-center align-items-center text-center">
                <h1 className='text-secondary-emphasis'>{props.data.h1}</h1>
             </div>
             <div className="col-xl-12  text-center text-secondary-emphasis mt-3"><p>{props.data.p}</p></div>


           <div className='dropdownbasicdiv col-xl-12 col-md-12 col-lg-12 d-flex    justify-content-around mt-3'>
           <div className=" col-xl-2 col-lg-12 col-md-12 mt-2">    <div >
            <p className='p-state text-light'>{props.data.dropdowntittle}</p>
            <Form.Select size='sm'>
      
      <option >{props.data.dropdown1}</option>
      <option >{props.data.dropdown2}</option>
      <option >{props.data.dropdown4}</option>
      <option >{props.data.dropdown5}</option>
      <option >{props.data.dropdown6}</option>
      <option >{props.data.dropdown7}</option>
      <option >{props.data.dropdown8}</option>
      <option >{props.data.dropdown9}</option>
      <option >{props.data.dropdown10}</option>

      <option>{props.data.dropdown11}</option>
      <option >{props.data.dropdown12}</option>
      <option >{props.data.dropdown13}</option>
      <option >{props.data.dropdown14}</option>
      <option >{props.data.dropdown15}</option>
      <option >{props.data.dropdown16}</option>
      <option >{props.data.dropdown17}</option>
      <option >{props.data.dropdown18}</option>
      <option >{props.data.dropdown19}</option>
      <option >{props.data.dropdown20}</option>

      <option>{props.data.dropdown21}</option>
      <option >{props.data.dropdown22}</option>
      <option >{props.data.dropdown23}</option>
      <option >{props.data.dropdown24}</option>
      <option >{props.data.dropdown25}</option>
      <option >{props.data.dropdown26}</option>
      <option >{props.data.dropdown27}</option>
      <option >{props.data.dropdown28}</option>
      <option >{props.data.dropdown29}</option>
      <option >{props.data.dropdown30}</option>

      <option>{props.data.dropdown31}</option>
      <option >{props.data.dropdown32}</option>
      <option >{props.data.dropdown33}</option>
      <option >{props.data.dropdown34}</option>
      <option >{props.data.dropdown35}</option>
      <option >{props.data.dropdown36}</option>
      <option >{props.data.dropdown387}</option>
      <option >{props.data.dropdown38}</option>
      <option >{props.data.dropdown39}</option>
      <option >{props.data.dropdown40}</option>

      <option>{props.data.dropdown41}</option>
      <option >{props.data.dropdown42}</option>
      <option >{props.data.dropdown43}</option>
      <option >{props.data.dropdown44}</option>
      <option >{props.data.dropdown45}</option>
      <option >{props.data.dropdown46}</option>
      <option >{props.data.dropdown47}</option>
      <option >{props.data.dropdown48}</option>
      <option >{props.data.dropdown49}</option>
      <option >{props.data.dropdown50}</option>

      <option>{props.data.dropdown51}</option>
      <option >{props.data.dropdown52}</option>
      <option >{props.data.dropdown53}</option>
      <option >{props.data.dropdown54}</option>
      <option >{props.data.dropdown55}</option>
      <option >{props.data.dropdown56}</option>
      <option >{props.data.dropdown57}</option>
      <option >{props.data.dropdown58}</option>
      <option >{props.data.dropdown59}</option>

    </Form.Select>
      </div>
</div>
           <div className="col-xl-2 col-lg-12  mt-2 col-md-12"> 
           <div > <p className='p-state text-light'>{props.data.dropdowntittle2}</p>
  
        
    <Form.Select  size='sm'>
      <option>{props.data.dropdown60}</option>
      <option value="3">{props.data.dropdown61}</option>
      <option >{props.data.dropdown62}</option>
    </Form.Select></div>

          
            </div>
      
           <div className="col-xl-2 col-md-12">   
          <div className='col-xl-12 mt-2'> <p className='p-state text-light'>{props.data.dropdowntittle3}</p>
 
    <Form.Select  size='sm'>
      <option>{props.data.dropdown63}</option>
      <option >{props.data.dropdown64}</option>
      <option >{props.data.dropdown65}</option>
      <option>{props.data.dropdown66}</option>
      <option >{props.data.dropdown67}</option>
      <option >{props.data.dropdown68}</option>
      <option>{props.data.dropdown69}</option>
      <option >{props.data.dropdown70}</option>
      <option >{props.data.dropdown71}</option>
      <option>{props.data.dropdown72}</option>
      <option >{props.data.dropdown73}</option>
      <option >{props.data.dropdown74}</option>
      <option>{props.data.dropdown75}</option>
      <option >{props.data.dropdown76}</option>
      <option >{props.data.dropdown77}</option>
      <option>{props.data.dropdown78}</option>
      <option >{props.data.dropdown79}</option>
      <option >{props.data.dropdown80}</option>
      <option >{props.data.dropdown81}</option>
      <option>{props.data.dropdown82}</option>
      <option >{props.data.dropdown83}</option>
      <option >{props.data.dropdown84}</option>
      <option>{props.data.dropdown85}</option>
      <option >{props.data.dropdown86}</option>
      <option >{props.data.dropdown87}</option>
    </Form.Select></div>

           </div>
           <div className="col-xl-2col-md-12 d-none">      <div className='col-xl-12'> <p className='p-state text-light'>{props.data.dropdowntittle3}</p>
 
 <Form.Select  size='sm'>
   <option>{props.data.dropdown63}</option>
   <option >{props.data.dropdown64}</option>
   <option >{props.data.dropdown65}</option>
   <option>{props.data.dropdown66}</option>
   <option >{props.data.dropdown67}</option>
   <option >{props.data.dropdown68}</option>
   <option>{props.data.dropdown69}</option>
   <option >{props.data.dropdown70}</option>
   <option >{props.data.dropdown71}</option>
   <option>{props.data.dropdown72}</option>
   <option >{props.data.dropdown73}</option>
   <option >{props.data.dropdown74}</option>
   <option>{props.data.dropdown75}</option>
   <option >{props.data.dropdown76}</option>
   <option >{props.data.dropdown77}</option>
   <option>{props.data.dropdown78}</option>
   <option >{props.data.dropdown79}</option>
   <option >{props.data.dropdown80}</option>
   <option >{props.data.dropdown81}</option>
   <option>{props.data.dropdown82}</option>
   <option >{props.data.dropdown83}</option>
   <option >{props.data.dropdown84}</option>
   <option>{props.data.dropdown85}</option>
   <option >{props.data.dropdown86}</option>
   <option >{props.data.dropdown87}</option>
 </Form.Select></div></div>
           <div className="email3 col-xl-3  col-md-12">
         
           <p className='p-state text-light'>{props.data.dropdownspan}</p>
           <form  class="mt-2 form-floating ">
   
 
           <label for="floatingInputInvalid" class="form-label d-flex align-items-center ms-2 text-secondary" placeholder=''>{props.data.emailjohn}</label>
  <input type="email" class="email2 mt-2 form-control is-invalid" id="floatingInputValue" />
  
</form>


   
           </div>
           <div className="col-xl-2   d-flex col-sm-12 calculate row  col-md-12 mt-1 justify-content-center">
           
                       <button className='calculate2 btn btn-warning col-xl-8   mt-3 text-light'> {props.data.calculate}</button>

            </div></div>
            <CardGroup className='cardsbasic col-xl-12 mt-5'>
       <Card className='d-none d-xl-block  col-xl-2 col-md-6 col-sm-12 col-12'>
        <Card.Header className='cardheader1'>{props.data.packages}</Card.Header>
        <Card.Text className='cardtext align-items-center ps-3 col-xl-12 lh-base d-flex '>
        {props.data.cardtext}{props.data.cardtext2}
          </Card.Text>
       
         
        
          <Card.Text><button className='btn btn-warning text-light col-xl-10 col-md-10 ms-4'>{props.data.cardbtn2}</button>  </Card.Text>
          <ListGroup variant="flush">
        <ListGroup.Item>{props.data.cardlist}</ListGroup.Item>
        <ListGroup.Item>{props.data.cardlist2}</ListGroup.Item>
        <ListGroup.Item>{props.data.cardlist3}</ListGroup.Item>
        <ListGroup.Item>{props.data.cardlist4}</ListGroup.Item>
        <ListGroup.Item>{props.data.cardlist}</ListGroup.Item>
      </ListGroup>


      
      </Card>
      <Card className='cardsbasic col-xl-2 col-md-6 mx-auto col-sm-12 col-12'>
        
        <Card.Header className='cardheader'>{props.data.cardheader}</Card.Header>
    
        <Card.Text className='basiccarddiv'>
        <div className='cardtext2 gap-3  justify-content-center col-xl-8 mx-auto '> <h1 className='ms-5'>{props.data.cardh1}</h1><span className='mt-3'>{props.data.cardspan}</span></div>
              <div className='cardtext3 gap-3 col-xl-8 mx-auto text-center'><span className='fs-1 fw-semibold d-block spantext'>{props.data.cardspan2}</span><p>{props.data.cardpp}</p></div>
                  <div className="cardtext4 gap-3  col-xl-8 text-center mx-auto">
                  <span className='fs-3 fw-semibold d-block spantext2'>{props.data.cardspan2}</span><p className='fs-6'>{props.data.cardpp2}</p>
                </div>
          </Card.Text>
       
         
        
          <Card.Text><button className='btn btn-primary bg-gradient text-light col-xl-10 ms-4'>{props.data.cardbtn}</button>  </Card.Text>
          <ListGroup variant="flush">
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-sharp fa-solid fa-circle-xmark text-secondary"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-sharp fa-solid fa-circle-xmark text-secondary"></i></ListGroup.Item>
      </ListGroup>


      
      </Card>

      <Card className='cardsbasic col-xl-2 col-md-6 col-sm-12 col-12'>
        
        <Card.Header className='cardheader2'>{props.data.cardheader2}</Card.Header>
    
        <Card.Text className='basiccarddiv'>
        <div className='cardtext2 gap-3  justify-content-center col-xl-8 mx-auto '> <h1 className='ms-4'>{props.data.cardh2}</h1><span className='mt-3'>{props.data.cardspan}</span></div>
              <div className='cardtext3 gap-3  col-xl-8 mx-auto text-center'><span className='fs-1 fw-semibold d-block spantext'>{props.data.cardspan2}</span><p>{props.data.cardpp}</p></div>
                  <div className="cardtext4 gap-3 col-xl-8 text-center mx-auto">
                  <span className='fs-3 fw-semibold d-block spantext2'>{props.data.cardspan2}</span><p className='fs-6'>{props.data.cardpp2}</p>
                </div>
          </Card.Text>
       
         
        
          <Card.Text><button className='btn btn-primary bg-gradient text-light col-xl-10 ms-4'>{props.data.cardbtn}</button>  </Card.Text>
          <ListGroup variant="flush">
          <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-sharp fa-solid fa-circle-xmark text-secondary"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-sharp fa-solid fa-circle-xmark text-secondary"></i></ListGroup.Item>
      </ListGroup>


      
      </Card>

      <Card className='cardsbasic col-xl-2 col-md-6 col-sm-12 col-12'>
        
        <Card.Header className='cardheader3'>{props.data.cardheader3}</Card.Header>
    
        <Card.Text className='basiccarddiv'>
        <div className='cardtext2 gap-3  justify-content-center col-xl-8 mx-auto '> <h1 className='ms-4'>{props.data.cardh3}</h1><span className='mt-3'>{props.data.cardspan}</span></div>
              <div className='cardtext3 gap-3  col-xl-8 mx-auto text-center'><span className='fs-1 fw-semibold d-block spantext'>{props.data.cardspan2}</span><p>{props.data.cardpp}</p></div>
                  <div className="cardtext4 gap-3 bcol-xl-8 text-center mx-auto">
                  <span className='fs-3 fw-semibold d-block spantext2'>{props.data.cardspan2}</span><p className='fs-6'>{props.data.cardpp2}</p>
                </div>
          </Card.Text>
       
         
        
          <Card.Text><button className='btn btn-primary bg-gradient text-light col-xl-10 ms-4'>{props.data.cardbtn}</button>  </Card.Text>
          <ListGroup variant="flush">
          <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
      </ListGroup>


      
      </Card>

   <Card className='cardsbasic col-xl-2 col-md-6 col-sm-12 col-12'>
        
        <Card.Header className='cardheader4'>{props.data.cardheader4}</Card.Header>
    
        <Card.Text className='basiccarddiv'>
        <div className='cardtext2 gap-3  justify-content-center col-xl-8 mx-auto '> <h1 className='ms-4'>{props.data.cardh4}</h1><span className='mt-3'>{props.data.cardspan}</span></div>
              <div className='cardtext3 gap-3  col-xl-8 mx-auto text-center'><span className='fs-1 fw-semibold d-block spantext'>{props.data.cardspan2}</span><p>{props.data.cardpp}</p></div>
                  <div className="cardtext4 gap-3  col-xl-8 text-center mx-auto">
                  <span className='fs-3 fw-semibold d-block spantext2'>{props.data.cardspan2}</span><p className='fs-6'>{props.data.cardpp2}</p>
                </div>
          </Card.Text>
       
         
        
          <Card.Text><button className='btn btn-primary bg-gradient text-light col-xl-10 ms-4'>{props.data.cardbtn}</button>  </Card.Text>
          <ListGroup variant="flush">
          <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
        <ListGroup.Item className='text-center'><i class="fa-solid fa-circle-check text-info"></i></ListGroup.Item>
      </ListGroup>


      
      </Card>


    </CardGroup>


            <div className='cardiv2 col-xl-12 d-flex justify-content-around gap-2  mt-5'> 
            <div className="col-xl-6 col-md-12 ">
            <div class="card mb-3 mt-3 h-75">
  <div class="card-body ">
    <h5 class="card-title"><span ><i class="fas fa-chevron-right"></i></span>{props.data.cardtitle}</h5>
    <p class="card-text ">{props.data.cardp}</p>
 
  </div>
</div>
        </div>


<div className="col-xl-6 col-md-12 ">
<div class="card mb-3 mt-3 h-75">
  <div class="card-body">
    <h5 class="card-title "><span ><i class="fas fa-chevron-right"></i></span>{props.data.cardtitle2}</h5>
    <p class="card-text">{props.data.cardp2}</p>
  </div>
</div>
</div>
            </div>
      
            <div className="d-flex  col-xl-12 col-md-12 col-sm-12  justify-content-center align-items-center text-center">
                <h1 className='text-secondary-emphasis'>{props.data.h2}</h1>
             </div>
             {/* cardimg */}
           <div class="row row-cols-1 row-cols-md-4 g-4 ps-5 text-center">
       
  <div class="col ">
    <div class="cardimg card h-100 text-center border border-0">
<div ><img src={props.data.cardimg2} class="  card-img-top img-fluid" alt="..."/></div>
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle3}</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="cardimg card h-100 text-center border border-0">
     <div><img src={props.data.cardimg2} class=" card-img-top img-fluid" alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle4}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class=" cardimg card h-100 text-center border border-0">
    <div><img src={props.data.cardimg3} class="card-img-top img-fluid"  alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle5}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card h-100 text-center border border-0">
    <div> <img src={props.data.cardimg4} class="card-img-top img-fluid " alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle6}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg5} class="card-img-top img-fluid " alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle7}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg6} class="card-img-top img-fluid"  alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle8}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div>  <img src={props.data.cardimg7} class="card-img-top img-fluid " alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle9}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg2} class="card-img-top img-fluid " alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle10}</h5>

      </div>
    </div>
  </div>
<div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg9} class="card-img-top  img-fluid" alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle11}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg10} class="card-img-top img-fluid" alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle12}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg11} class="card-img-top img-fluid" alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle13}</h5>

      </div>
    </div>
  </div> <div class="col">
    <div class="cardimg card  text-center border border-0">
    <div> <img src={props.data.cardimg12} class="card-img-top img-fluid" alt="..."/></div> 
      <div class="card-body">
        <h5 class="card-title">{props.data.cardtitle14}</h5>

      </div>
    </div>
  </div>
  </div> 
  <div className="d-flex  col-xl-12 col-md-12 col-sm-12 mt-5 justify-content-center align-items-center text-center">
                <h5 className='text-secondary-emphasis'>{props.data.h3}
 </h5>
             </div>


             <div className="col-xl-11 col-md-11 mx-auto col-sm-11 col-lg-11 mt-5 ">
             <Accordion className='justify-content-center' defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header> <span><i class="fa-solid fa-plus"></i></span><span className='ms-2'>{props.data.acordionspan}</span></Accordion.Header>
        <Accordion.Body className='bgaccordion'>
      {props.data.acordionp}
<p className='mt-4'>{props.data.acordionp2}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mt-1' eventKey="2">
        <Accordion.Header> <span><i class="fa-solid fa-plus"></i></span><span className='ms-2'>{props.data.acordionspan2}</span></Accordion.Header>
        <Accordion.Body className='bgaccordion'>
    {props.data.acordionp3}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mt-1' eventKey="3">
        <Accordion.Header> <span><i class="fa-solid fa-plus"></i></span><span className='ms-2'>{props.data.acordionspan3}</span></Accordion.Header>
        <Accordion.Body className='bgaccordion'>
      {props.data.acordionp4}
<p className='mt-4'>{props.data.acordionp5}</p>
{props.data.acordionp6}
<p className='mt-4'>{props.data.acordionp7}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mt-1' eventKey="4">
        <Accordion.Header> <span><i class="fa-solid fa-plus"></i></span><span className='ms-2'> {props.data.acordionspan4}</span></Accordion.Header>
        <Accordion.Body className='bgaccordion'>
       
<p className='mt-2'>{props.data.acordionp8}</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='mt-1' eventKey="5">
        <Accordion.Header> <span><i class="fa-solid fa-plus"></i></span><span className='ms-2'>{props.data.acordionspan5}</span></Accordion.Header>
        <Accordion.Body className='bgaccordion'>
      
<p className='mt-2'>{props.data.acordionp9} <span className='text-primary'>{props.data.acordionp10}</span> <span>{props.data.acordionp11}</span></p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
             </div>
             {/* webkit-transform: rotate(-90deg); */}






 

      </div>
    </>

  )
}

    