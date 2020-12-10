import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/images.jpeg";
import img2 from "../../images/images2.jpeg";
import img3 from "../../images/portfolio.jpeg";
import image from "../../components/Carousel/Carousel Image/carouselImage.jpg"
import {faAward, faCog, faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons"

import {fontAwesome, FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import styled from 'styled-components'


const CarouselImage = () => {
  return (
    <Carousel >
    <Carousel.Item>
     <div className="container" style={{ width: "100", height: "806px",padding:"10px",fontFamily:"cursive",alignItems:"center"}}>
      <section style={{display:"flex",backgroundColor:"#000000",color:"#ffffff",padding:"15px"}}>
        <aside>
            <div className="box" style={{width:"50px",height:"50px",border:"4px solid tomato",transform:"rotate(45deg)",margin:"30px",borderRadius:"5px",backgroundColor
          :"white"}}></div>
        </aside>
        <aside>
          <summary>Hello, my name is</summary>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          < h2  style={{color:"tomato"}}>H A M Z A T  </h2>
          <h2 style={{color:"tomato"}}> R I D W A N</h2>
          </div>
          <p>Graphics designer and illustrator</p>
          <div className="contact" style={{display:"flex",justifyContent:"space-around"}}>
            <a href="#" className="link" style={{color:"white",marginRight:"35px"}}> <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"5px"}}/> ridwanulllah@gmail.com</a>
            <p> <FontAwesomeIcon icon={faPhone} style={{transform:"rotate(90deg)",marginRight:"5px"}}/> 08093167861</p>
          </div>
          </aside>
        </section>
  <div style={{display:"flex",justifyContent:"space-between"}}>
      <aside style={{width:"50%",backgroundColor:"tomato",padding:"10px",color:"white"}}>
        <div style={{textAlign:""}}>
        <h3 style={{backgroundColor:"black",borderTopRightRadius:"25px",borderBottomRightRadius:"25px",color:"#ffffff",padding:"6px",textAlign:"center"}}>SKILLS</h3>
          <div className="row">
       <div className="col" id="skillOne"><p style={{fontSize:"10px"}}>WEB DESIGN </p>
       </div>
       <div className="col">
         <div className="progress">
           <div className="progress-bar progress-bar-striped progres-bar-success active" style={{width:"75%",backgroundColor:"black"}}></div>
         </div>
       </div>
        </div>
        <div className="row">
       <div className="col" id="skillTwo"><p style={{fontSize:"10px"}}>GRAPHIC DESIGN</p>
       </div>
       <div className="col">
         <div className="progress">
           <div className="progress-bar progress-bar-striped progres-bar-success active" style={{width:"80%",backgroundColor:"black"}}></div>
         </div>
       </div>
        </div>
        <div className="row">
       <div className="col" id="skillThree"><p style={{fontSize:"10px"}}>UI DESIGN </p>
       </div>
       <div className="col">
         <div className="progress">
           <div className="progress-bar progress-bar-striped progress-bar-striped progres-bar-success active" style={{width:"85%",backgroundColor:"black"}}></div>
         </div>
       </div>
        </div>
        <div className="row">
       <div className="col" id="skillFour"><p style={{fontSize:"10px"}}>DRAWING </p>
       </div>
       <div className="col">
         <div className="progress">
           <div className="progress-bar progress-bar-striped progres-bar-success active" style={{width:"90%",backgroundColor:"black"}}></div>
         </div>
       </div>
        </div>
        <div className="row">
       <div className="col" id="skillFive"><p style={{fontSize:"10px"}}>ANIMATION </p>
       </div>
       <div className="col">
         <div className="progress">
           <div className="progress-bar progress-bar-striped progres-bar-success active" style={{width:"95%",backgroundColor:"black"}}></div>
         </div>
       </div>
        </div>
     
     
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"black",borderTopRightRadius:"25px",borderBottomRightRadius:"25px"}}>
      
    
      <p style={{visibility:"hidden"}}>wha</p>
      <h3 style={{backgroundColor:"black",borderTopRightRadius:"15px",borderBottomRightRadius:"15px",color:"#ffffff",padding:"3px"}}>SOFTWARE  </h3>
      <div style={{marginRight:"10px",marginTop:"8px",color:"white"}}><FontAwesomeIcon icon={faCog} className="fa-lg"/></div>
      </div>
      </div>
      </aside>
      <aside style={{width:"50%",padding:"10px",}}>
      <div style={{textAlign:"center"}}>
       <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"tomato",marginBottom:"8px", borderTopRightRadius:"25px",borderBottomRightRadius:"25px"}}>
      
    
      <p style={{visibility:"hidden"}}>wha</p>
      <h3 style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px",color:"#ffffff",padding:"3px"}}>EDUCATION</h3>
      <div style={{marginRight:"10px",marginTop:"8px",color:"white",marginBottom:"-10px"}}><FontAwesomeIcon icon={faAward} className="fa-lg"/></div>
      </div>
      <section className="education" style={{display:"flex"}}>
        <div className="row">
          <div className="col">2008/2010</div>
          <div className="col">
            <h6 style={{textAlign:"left"}}>LOREMPIPSUM</h6>
            <p style={{textAlign:"left"}}>here is a paragraph of some few details aboit the education</p>
            
          </div>
          <div className="col">2008/2010</div>
          <div className="col">
            <h6 style={{textAlign:"left"}}>LOREMPIPSUM</h6>
            <p style={{textAlign:"left"}}>here is a paragraph of some few details aboit the education</p>
            
          </div>
            <div className="col">2008/2010</div>
          <div className="col">
            <h6 style={{textAlign:"left"}}>LOREMPIPSUM</h6>
            <p style={{textAlign:"left"}}>here is a paragraph of some few details aboit the education</p>
            
          </div>

        </div>
      </section>
    </div>
      </aside>
 
      </div>
    
        <section>
          <p style={{marginTop:"3rem",textAlign:"center",padding:"20px"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, reprehenderit iure quia autem eaque doloribus incidunt possimus,
            quaerat, suscipit exercitationem totam. Ab tenetur recusandae veritatis dolore laborum quaerat ratione quis commodi hic reiciendis animi 
          </p>
        </section>
</div> 
    </Carousel.Item>
    <Carousel.Item>
    <div className="container" style={{ width: "100", height: "806px", backgroundColor: '#ffffff',padding:"2rem" }}>
      <section className="imageSection" style={{marginBottom:"8rem"}}>
        <img className="d-block w-100" src={image} alt="First slide" style={{width:"348px",height:"274px"}} />
        </section>
        <section className="textSection">
          <p style={{textAlign:"center"}}>   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, reprehenderit iure quia autem eaque doloribus incidunt possimus,
            quaerat, suscipit exercitationem totam. Ab tenetur recusandae veritatis dolore laborum quaerat ratione quis commodi hic reiciendis animi  </p>
        </section>
  
      </div>
    </Carousel.Item> 
  </Carousel>


      
    
)
}




export default CarouselImage;



{/* <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </div> */}

//       In the video above, you can see when the carousel slides from one image to another, the rounded corners temporarily disappear. Is there anyway to prevent that?

// CSS
// .carousel, .slide,
// .carousel .carousel-inner,
// .carousel .carousel-item,
// .carousel .carousel-item img,
// .carousel .carousel-control {
//   border-radius: $12;
//   overflow: hidden;
// }
// HTML
//     <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
//         <ol class="carousel-indicators">
//             <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
//             <li data-target="#carousel-example-generic" data-slide-to="1"></li>
//             <li data-target="#carousel-example-generic" data-slide-to="2"></li>
//             <li data-target="#carousel-example-generic" data-slide-to="3"></li>
//         </ol>
//         <div class="carousel-inner" role="listbox">
//             <div class="carousel-item active">
//                 <img src="/img/1.jpeg" alt="...">
//                 <div class="carousel-caption">
//                     <h3>Unsplash</h3>
//                     <p>This is a photo from unsplash.com</p>
//                 </div>
//             </div>
//             <div class="carousel-item">
//                 <img src="/img/2.jpeg" alt="...">
//                 <div class="carousel-caption">
//                     <h3>Unsplash</h3>
//                     <p>This is a photo from unsplash.com</p>
//                 </div>
//             </div>
//             <div class="carousel-item">
//                 <img src="/img/5.jpeg" alt="...">
//                 <div class="carousel-caption">
//                     <h3>Unsplash</h3>
//                     <p>This is a photo from unsplash.com</p>
//                 </div>
//             </div>
//             <div class="carousel-item">
//                 <img src="/img/4.jpeg" alt="...">
//                 <div class="carousel-caption">
//                     <h3>Unsplash</h3>
//                     <p>This is a photo from unsplash.com</p>
//                 </div>
//             </div>
//         </div>
//         <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
//             <span class="icon-prev" aria-hidden="true"></span>
//             <span class="sr-only">Previous</span>
//         </a>
//         <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
//             <span class="icon-next" aria-hidden="true"></span>
//             <span class="sr-only">Next</span>
//         </a>
//     </div>