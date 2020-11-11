import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/images.jpeg";
import img2 from "../../images/images2.jpeg";
import img3 from "../../images/portfolio.jpeg";
import {faAward, faCog, faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons"

import {fontAwesome, FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const CarouselImage = () => {
  return (
    <div className="container" style={{boxShadow:"0 0 15px 5px black",padding:"10px",fontFamily:"cursive"}}>
    <section style={{display:"flex",backgroundColor:"#000000",color:"#ffffff",padding:"15px"}}>
            <aside>
                <div className="box" style={{width:"50px",height:"50px",border:"4px solid tomato",transform:"rotate(45deg)",margin:"30px",borderRadius:"5px",backgroundColor
              :"white"}}></div>
            </aside>
            <aside>
              <summary>Hello, my name is</summary>
              < h1 style={{color:"tomato"}}>H A M Z A T   R I D W A N</h1>
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
    
)
}


    // <Carousel>
    //   <Carousel.Item>
    //     <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
    //       <img className="d-block w-100" src={img1} alt="First slide" />
    //       <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //       </Carousel.Caption>
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
    //       <img className="d-block w-100" src={img2} alt="Second slide" />
    //       <Carousel.Caption>
    //         <h3>Second slide label</h3>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       </Carousel.Caption>
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
    //       <img className="d-block w-100" src={img3} alt="Third slide" />
    //       <Carousel.Caption>
    //         <h3>Third slide label</h3>
    //         <p>
    //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //         </p>
    //       </Carousel.Caption>
    //     </div>
    //   </Carousel.Item>
    // </Carousel>

export default CarouselImage;
