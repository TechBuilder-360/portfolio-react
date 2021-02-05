import React from "react";

import classes from "./carousel.module.css"
import img1 from "../../images/carousel-img1.jpg";
import img2 from "../../images/carousel-img2.jpg";
import img3 from "../../images/carousel-img3.jpg";

const CarouselImage = () => {
  return (
    <div>
    <div className={classes.carousel}>
      <ul className={classes.slides}>
        <input type="radio" name="radio-buttons" id="img-1" checked />
        <li className={classes.slide_container}>
          <div className={classes.slide_image}>
            <img  alt="pic1" src={img1}/>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-2" />
        <li className={classes.slide_container}>
          <div className={classes.slide_image}>
            <img alt="pic2" src={img2}/>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-3" />
        <li className={classes.slide_container}>
          <div className={classes.slide_image}>
            <img alt="pic3" src={img3}/>
          </div>
        </li>
      </ul>
      <div className={classes.carousel_text}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.</p>
      </div>
      <div className={classes.carousel_dots}>
          <label for="img-1" className={classes.carousel_dot} id="img-dot-1"></label>
          <label for="img-2" className={classes.carousel_dot} id="img-dot-2"></label>
          <label for="img-3" className={classes.carousel_dot} id="img-dot-3"></label>
        </div>
    </div>
</div>
  )
}

export default CarouselImage;