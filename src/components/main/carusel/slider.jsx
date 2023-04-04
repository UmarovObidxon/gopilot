import React from 'react'
import '../../../css/main.css/slider.css'
import { obj1 } from '../../../api/user'
export default function slider({data}) {
  return (

    <div className='slidera  d-flex justify-content-center'>
        <div className="slider  row d-flex flex-column">
            <div className='slider-child col-xl-12 col-md-12 col-sm-12 col-12 position-relative d-flex'>
            <div class="card div-card text-white rounded-0 col-xl-7 col-md-12 col-sm-12 col-12">
                    <img id='img1' src={data[1].img1} class="card-img rounded-0 " alt="..."/>
                    <div class="card-img-overlay ps-5 d-flex flex-column align-content-between justify-content-around">
                        <div>
                            <p id="p" className='fs-1 text-warning fw-bolder' >{data[1].p}</p>
                        </div>
                        <div className='col-xl-9'>
                            <p id="p1" className='fs-2'>{data[1].p1}</p>
                        </div>
                       <div className='d-flex col-xl-12  justify-content-around align-content-center'>
                         <div className='img-user' >
                            <img className='img-fluid rounded-circle' id='img' src={data[1].img} alt="" />
                         </div>
                         <div className=' col-lg-10 col-md-9 col-sm-12  d-flex flex-column justify-content-center '>
                            <span id='p2' className='d-flex fs-2 fw-bolder'> {data[1].p2}</span>
                            <span id='span' className='span d-flex'>{data[1].p3}</span>
                         </div>
                        </div>
                    </div>
          </div>
                <div className="col-xl-5 col-md-12 col-sm-12 col-12 border bg-white d-flex justify-content-center">
                    <div className=' col-xl-10 d-flex flex-column justify-content-evenly'>
                    <div>
                        <p id="p4" className='fs-3 fw-semibold'>{data[1].p4}</p>
                       </div>
                    <div>
                        <p id="p5" className='fs-4'>{data[1].p5}</p>
                    </div>
                    <div>
                        <a id='a'className='text-decoration-none' href="">{data[1].a}</a>
                    </div>
                    </div>
                </div>
            </div>
           <div className='col-xl-12 col-md-12 col-sm-12 col-12 d-flex z-5 overflow-hidden' >
                <div id='div1' className=' border-bottom border-end' onClick={dad1}><img className='img-fluid' src={data[0].a} alt="" id="img3" /></div>
                <div id='div2 'className=' border-bottom border-end' onClick={dad2}><img className='img-fluid' src={data[0].b} alt="" id="img4" /></div>
                <div id='div3 'className=' border-bottom border-end' onClick={dad3}><img className='img-fluid' src={data[0].c} alt="" id="img5" /></div>
                <div id='div4 'className=' border-bottom border-end' onClick={dad4}><img className='img-fluid' src={data[0].d} alt="" id="img6" /></div>
                <div id='div5 'className=' border-bottom border-end' onClick={dad5}><img className='img-fluid' src={data[0].e} alt="" id="img7" /></div>
                <div id='div6 'className=' border-bottom border-end' onClick={dad6}><img className='img-fluid' src={data[0].f} alt="" id="img8" /></div>
                <div id='div7 'className=' border-bottom border-end' onClick={dad7}><img className='img-fluid ' src={data[0].g} alt="" id="img9" /></div>
           </div>
        </div>
    </div>
    
  )
}
function dad1(){
// img filter ==>
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img5=document.getElementById('img5');
var img6=document.getElementById('img6');
var img7=document.getElementById('img7');
var img8=document.getElementById('img8');
var img9=document.getElementById('img9');
// img filter <==
// p innertext ==>
var p=document.getElementById('p');
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('span');
var p4=document.getElementById('p4');
var p5=document.getElementById('p5');
// p innertext <==


// a innertext ==>
var a=document.getElementById('a');
// a innertext <==
// img src ==>
var img=document.getElementById('img');
var img1=document.getElementById('img1');
// img src <==
// ===== style ======
// img filter ==>
img3.style.filter='none'
img4.style.filter='grayscale(1)'
img5.style.filter='grayscale(1)'
img6.style.filter='grayscale(1)'
img7.style.filter='grayscale(1)'
img8.style.filter='grayscale(1)'
img9.style.filter='grayscale(1)'
// img filter <==
// p innertext ==>
p.innerText=obj1[1].p
p1.innerText=obj1[1].p1
p2.innerText=obj1[1].p2
p3.innerText=obj1[1].p3
p4.innerText=obj1[1].p4
p5.innerText=obj1[1].p5
// p innertext <==
// a innertext ==>
a.innerText=obj1[1].a
// a innertext <==
// img src ==>
img.src=obj1[1].img
img1.src=obj1[1].img1
// img src <==
}


function dad2(){
    // img filter ==>
    var img3=document.getElementById('img3');
    var img4=document.getElementById('img4');
    var img5=document.getElementById('img5');
    var img6=document.getElementById('img6');
    var img7=document.getElementById('img7');
    var img8=document.getElementById('img8');
    var img9=document.getElementById('img9');
    // img filter <==
    // p innertext ==>
    var p=document.getElementById('p');
    var p1=document.getElementById('p1');
    var p2=document.getElementById('p2');
    var p3=document.getElementById('span');
    var p4=document.getElementById('p4');
    var p5=document.getElementById('p5');
    // p innertext <==
    // a innertext ==>
    var a=document.getElementById('a');
    // a innertext <==
    // img src ==>
    var img=document.getElementById('img');
    var img1=document.getElementById('img1');
    // img src <==
    // ===== style ======
    // img filter ==>
    img4.style.filter='none'
    img9.style.filter='grayscale(1)'
    img5.style.filter='grayscale(1)'
    img6.style.filter='grayscale(1)'
    img7.style.filter='grayscale(1)'
    img8.style.filter='grayscale(1)'
    img3.style.filter='grayscale(1)'
    // img filter <==
    // p innertext ==>
    p.innerText=obj1[2].p
    p1.innerText=obj1[2].p1
    p2.innerText=obj1[2].p2
    p3.innerText=obj1[2].p3
    p4.innerText=obj1[2].p4
    p5.innerText=obj1[2].p5
    // p innertext <==
    // a innertext ==>
    a.innerText=obj1[2].a
    // a innertext <==
    // img src ==>
    img.src=obj1[2].img
    img1.src=obj1[2].img1
    // img src <==
    }


function dad3(){
// img filter ==>
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img5=document.getElementById('img5');
var img6=document.getElementById('img6');
var img7=document.getElementById('img7');
var img8=document.getElementById('img8');
var img9=document.getElementById('img9');
// img filter <==
// p innertext ==>
var p=document.getElementById('p');
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('span');
var p4=document.getElementById('p4');
var p5=document.getElementById('p5');
// p innertext <==
// a innertext ==>
var a=document.getElementById('a');
// a innertext <==
// img src ==>
var img=document.getElementById('img');
var img1=document.getElementById('img1');
// img src <==
// ===== style ======
// img filter ==>
img5.style.filter='none'
img4.style.filter='grayscale(1)'
img9.style.filter='grayscale(1)'
img6.style.filter='grayscale(1)'
img7.style.filter='grayscale(1)'
img8.style.filter='grayscale(1)'
img3.style.filter='grayscale(1)'
// img filter <==
// p innertext ==>
p.innerText=obj1[3].p
p1.innerText=obj1[3].p1
p2.innerText=obj1[3].p2
p3.innerText=obj1[3].p3
p4.innerText=obj1[3].p4
p5.innerText=obj1[3].p5
// p innertext <==
// a innertext ==>
a.innerText=obj1[3].a
// a innertext <==
// img src ==>
img.src=obj1[3].img
img1.src=obj1[3].img1
// img src <==
}
function dad4(){
    // img filter ==>
    var img3=document.getElementById('img3');
    var img4=document.getElementById('img4');
    var img5=document.getElementById('img5');
    var img6=document.getElementById('img6');
    var img7=document.getElementById('img7');
    var img8=document.getElementById('img8');
    var img9=document.getElementById('img9');
    // img filter <==
    // p innertext ==>
    var p=document.getElementById('p');
    var p1=document.getElementById('p1');
    var p2=document.getElementById('p2');
    var p3=document.getElementById('span');
    var p4=document.getElementById('p4');
    var p5=document.getElementById('p5');
    // p innertext <==
    // a innertext ==>
    var a=document.getElementById('a');
    // a innertext <==
    // img src ==>
    var img=document.getElementById('img');
    var img1=document.getElementById('img1');
    // img src <==
    // ===== style ======
    // img filter ==>
    img6.style.filter='none'
    img4.style.filter='grayscale(1)'
    img5.style.filter='grayscale(1)'
    img9.style.filter='grayscale(1)'
    img7.style.filter='grayscale(1)'
    img8.style.filter='grayscale(1)'
    img3.style.filter='grayscale(1)'
    // img filter <==
    // p innertext ==>
    p.innerText=obj1[4].p
    p1.innerText=obj1[4].p1
    p2.innerText=obj1[4].p2
    p3.innerText=obj1[4].p3
    p4.innerText=obj1[4].p4
    p5.innerText=obj1[4].p5
    // p innertext <==
    // a innertext ==>
    a.innerText=obj1[4].a
    // a innertext <==
    // img src ==>
    img.src=obj1[4].img
    img1.src=obj1[4].img1
    // img src <==
    }
    function dad5(){
        // img filter ==>
        var img3=document.getElementById('img3');
        var img4=document.getElementById('img4');
        var img5=document.getElementById('img5');
        var img6=document.getElementById('img6');
        var img7=document.getElementById('img7');
        var img8=document.getElementById('img8');
        var img9=document.getElementById('img9');
        // img filter <==
        // p innertext ==>
        var p=document.getElementById('p');
        var p1=document.getElementById('p1');
        var p2=document.getElementById('p2');
        var p3=document.getElementById('span');
        var p4=document.getElementById('p4');
        var p5=document.getElementById('p5');
        // p innertext <==
        // a innertext ==>
        var a=document.getElementById('a');
        // a innertext <==
        // img src ==>
        var img=document.getElementById('img');
        var img1=document.getElementById('img1');
        // img src <==
        // ===== style ======
        // img filter ==>
        img7.style.filter='none'
        img4.style.filter='grayscale(1)'
        img5.style.filter='grayscale(1)'
        img6.style.filter='grayscale(1)'
        img9.style.filter='grayscale(1)'
        img8.style.filter='grayscale(1)'
        img3.style.filter='grayscale(1)'
        // img filter <==
        // p innertext ==>
        p.innerText=obj1[5].p
        p1.innerText=obj1[5].p1
        p2.innerText=obj1[5].p2
        p3.innerText=obj1[5].p3
        p4.innerText=obj1[5].p4
        p5.innerText=obj1[5].p5
        // p innertext <==
        // a innertext ==>
        a.innerText=obj1[5].a
        // a innertext <==
        // img src ==>
        img.src=obj1[5].img
        img1.src=obj1[5].img1
        // img src <==
        }
        function dad6(){
            // img filter ==>
            var img3=document.getElementById('img3');
            var img4=document.getElementById('img4');
            var img5=document.getElementById('img5');
            var img6=document.getElementById('img6');
            var img7=document.getElementById('img7');
            var img8=document.getElementById('img8');
            var img9=document.getElementById('img9');
            // img filter <==
            // p innertext ==>
            var p=document.getElementById('p');
            var p1=document.getElementById('p1');
            var p2=document.getElementById('p2');
            var p3=document.getElementById('span');
            var p4=document.getElementById('p4');
            var p5=document.getElementById('p5');
            // p innertext <==
            // a innertext ==>
            var a=document.getElementById('a');
            // a innertext <==
            // img src ==>
            var img=document.getElementById('img');
            var img1=document.getElementById('img1');
            // img src <==
            // ===== style ======
            // img filter ==>
            img8.style.filter='none'
            img4.style.filter='grayscale(1)'
            img5.style.filter='grayscale(1)'
            img6.style.filter='grayscale(1)'
            img7.style.filter='grayscale(1)'
            img9.style.filter='grayscale(1)'
            img3.style.filter='grayscale(1)'
            // img filter <==
            // p innertext ==>
            p.innerText=obj1[6].p
            p1.innerText=obj1[6].p1
            p2.innerText=obj1[6].p2
            p3.innerText=obj1[6].p3
            p4.innerText=obj1[6].p4
            p5.innerText=obj1[6].p5
            // p innertext <==
            // a innertext ==>
            a.innerText=obj1[6].a
            // a innertext <==
            // img src ==>
            img.src=obj1[6].img
            img1.src=obj1[6].img1
            // img src <==
            }
 function dad7(){
                // img filter ==>
                var img3=document.getElementById('img3');
                var img4=document.getElementById('img4');
                var img5=document.getElementById('img5');
                var img6=document.getElementById('img6');
                var img7=document.getElementById('img7');
                var img8=document.getElementById('img8');
                var img9=document.getElementById('img9');
                // img filter <==
                // p innertext ==>
                var p=document.getElementById('p');
                var p1=document.getElementById('p1');
                var p2=document.getElementById('p2');
                var p3=document.getElementById('span');
                var p4=document.getElementById('p4');
                var p5=document.getElementById('p5');
                // p innertext <==
                // a innertext ==>
                var a=document.getElementById('a');
                // a innertext <==
                // img src ==>
                var img=document.getElementById('img');
                var img1=document.getElementById('img1');
                // img src <==
                // ===== style ======
                // img filter ==>
                img9.style.filter='none'
                img4.style.filter='grayscale(1)'
                img5.style.filter='grayscale(1)'
                img6.style.filter='grayscale(1)'
                img7.style.filter='grayscale(1)'
                img8.style.filter='grayscale(1)'
                img3.style.filter='grayscale(1)'
                // img filter <==
                // p innertext ==>
                p.innerText=obj1[7].p
                p1.innerText=obj1[7].p1
                p2.innerText=obj1[7].p2
                p3.innerText=obj1[7].p3
                p4.innerText=obj1[7].p4
                p5.innerText=obj1[7].p5
                // p innertext <==
                // a innertext ==>
                a.innerText=obj1[7].a
                // a innertext <==
                // img src ==>
                img.src=obj1[7].img
                img1.src=obj1[7].img1
                // img src <==
                }
