import React from "react";
import classes from "./carousel.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import image1 from "./Carousel Image/1.jpeg";
import image2 from "./Carousel Image/2.jpg";
import image3 from "./Carousel Image/3.jpg";
import image4 from "./Carousel Image/4.jpeg";

const CarouselImage = () => {
  return (
    <Carousel className={classes.Carousel} controls={false}>
      <Carousel.Item>
        <img
          src={image1}
          alt="First slide"
          className="d-block w-100"
        />
        <p>First Slide</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image2}
          alt="First slide"
          className="d-block w-100"
        />
        <p>Second Slide</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image3}
          alt="First slide"
          className="d-block w-100"
        />
        <p>Third Slide</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image4}
          alt="First slide"
          className="d-block w-100"
        />
         <p>Fourth Slide</p>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselImage;
