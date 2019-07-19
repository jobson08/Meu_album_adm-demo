import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src:"../assets/img/theo1.jpg",
    altText: "Slide 1",
    caption: ""
  },
  {
    src:"../assets/img/theo2.jpg",
    altText: "Slide 2",
    caption: ""
  },
  {
    src:"../assets/img/theo3.jpg",
    altText: "Slide 3",
    caption: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={carouselItems} />
      </>
    );
  }
}

export default Carousel;