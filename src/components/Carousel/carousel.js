import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/images.jpeg";
import img2 from "../../images/images2.jpeg";
import img3 from "../../images/portfolio.jpeg";

const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ width: "100%", height: "300px", backgroundColor: '#000000' }}>
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
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;
