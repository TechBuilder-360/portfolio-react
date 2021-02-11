import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import classes from "./carousel.module.css"
import img1 from "../../images/creativity.jpg";
import img2 from "../../images/connectivity.jpg";
import img3 from "../../images/achievement.jpg";


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
        <p><cite>The best way to create value in the 21st century is to connect Creativity with Technology.</cite> <br/><br/>- Steve Jobs</p>
      </div>
        </Carousel.Item>
        <Carousel.Item interval={interval}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
          <div className={classes.carousel_text}>
        <p><cite>Technology is best when it brings people together.</cite> <br/><br/>- Matt Mullenweg</p>
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