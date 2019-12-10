import React from "react";

function CarouselImages(props) {
  const content = props.images.map(image => (
    <div key={image.id}>
      <img src={image.title} alt="images" />
      <p>{image.content}</p>
    </div>
  ));
  return <div className="style">{content}</div>;
}

export default CarouselImages;
