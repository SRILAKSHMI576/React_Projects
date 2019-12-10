import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselStyle.css";

function CarouselImages(props) {
  const content = props.images.map(image => (
    <div key={image.id}>
      <img src={image.title} alt="images" />
      <p>{image.content}</p>
    </div>
  ));
  return (
    <div className="style">
      <Carousel>{content}</Carousel>
    </div>
  );
}

export default CarouselImages;
