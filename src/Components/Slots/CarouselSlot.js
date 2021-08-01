import React from "react";
import Container from "../../styles/Center";

/**
 *
 * @param {element} Carousel - A React component that achieves the Carousel UI. This component manages all the state management as well as the component logic to achieve a carousel behavior
 * @param {{src: string, alt:string, id: string}[]} images - an array with objects as elements, contains the images to render
 * @returns {element} - renders the Carousel UI. This is a lot component so it only manages the styling, where the passed component (Carousel) is 'slot' into the special part of the UI
 */
const CarouselSlot = ({ Carousel, images }) => {
  return (
    <Container>
      <Carousel images={images} />
    </Container>
  );
};

export default CarouselSlot;
