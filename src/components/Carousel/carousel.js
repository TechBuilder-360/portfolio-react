import React, {useEffect, useState} from "react";

import classes from "./carousel.module.css"
import img1 from "../../images/carousel-img1.jpg";
import img2 from "../../images/carousel-img2.jpg";
import img3 from "../../images/carousel-img3.jpg";


const CarouselImage = () => {
  const [sliderImage, setSliderImage] = useState(img1);
  // const [index, setIndex] = useState(0);

  const switchImage = (id) => {
    
    switch(id){
      case 1: setSliderImage(img1); break;
      case 2: setSliderImage(img2); break;
      case 3: setSliderImage(img3); break; 
  
      default: setSliderImage(img1)
    }
  };

  const slide_image = [img1, img2, img3]

  // useEffect(()=>{
  //   setInterval(()=>{
  //     if(index > slide_image.length-1){
  //       setIndex(0)
  //       setSliderImage(slide_image[0])
  //     }
  //     else{
  //       setSliderImage(slide_image[index])
  //       setIndex(index+1)
  //     }
  //   }, 5000)
  // })

  return (
    <div className={classes.carousel}>
      <ul className={classes.slides}>
        <input type="radio" name="radio-buttons" id="img-1" checked />
        <li className={classes.slide_container}>
          <div>
            <img  className={classes.slide_image} alt="pic1" src={sliderImage}/>
          </div>
        </li>
      </ul>
      <div className={classes.carousel_text}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.</p>
      </div>
      <div className={classes.carousel_dots}>
        {
          slide_image.map((_, i)=>(
            <label onClick={() => switchImage(i+1)} className={classes.carousel_dot} ></label>
          ))
        }
        </div>
    </div>
  )
}

export default CarouselImage;