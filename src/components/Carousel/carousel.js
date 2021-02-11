import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import classes from "./carousel.module.css"
import img1 from "../../images/carousel-img1.jpg";
import img2 from "../../images/carousel-img2.jpg";
import img3 from "../../images/carousel-img3.jpg";


const CarouselImage = () => {
  const interval = 5000

  return (
    <div className={classes.carousel}>
      <div className={classes.carousel_slides}>
      <Carousel controls={false}>
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <div className={classes.carousel_text}>
        <p><cite>The best way to get started is to quit talking and begin doing.</cite> <br/><br/>- Walt Disney</p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
          <div className={classes.carousel_text}>
        <p><cite>It's not what you achieve, it's what you overcome. That's what defines your career.</cite> <br/><br/>- Carlton Fisk </p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <div className={classes.carousel_text}>
        <p><cite>The world won't care about your self-esteem. The world will expect 
          you to accomplish something BEFORE you feel good about yourself.</cite> <br/><br/>- Bill Gates</p>
      </div>
        </Carousel.Item>
      </Carousel>
      </div>   
    </div>
  )
}

export default CarouselImage;