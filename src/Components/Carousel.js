import React, { useState, useEffect, useRef } from "react";
//data
//Image component
import Image from "./Image";
import ImageSlot from "./Slots/ImageSlot";
//Button components
import CarouselButtons from "./CarouselButtons";
import CarouselButtonsSlot from "./Slots/CarouselButtonSlot";
//Text components
import TextSlot from "./Slots/TextSlot";
import Text from "./Text";
/**
 * the <Carousel/> component is the component that manages the state as well as the logic to achieve the carousel UI.
 *
 * COUNT STATE:
 * The {number} count state is used to determine which image and button should be active
 * the image and button components are rendered by iterating through the images and images lnegth
 * and the index value of the iteration is passed as a prop, in the Button and Image components
 * if the count === index, then the button/image is active, so the image is shown and the button's background is black to indicate that it's active
 *
 * CANCELED STATE:
 * a boolean state, where the value does not matter. It's simply used to re-run the useEffect hook
 * when the button is clicked, the timer is canceled, but we need to re-run the timer again to continue
 * with the carousel behavior. To do that useEffect is called again, which will re-run if cancaled updates
 *
 * USEFFECT:
 * as every side effect needs to be managed in the useEffect hook, setInterval is called here.
 * to cancel the timer when Carousel is unmounted, the ref hook is assigned the timer id
 * the timer id is also used to cancel the current timer with a button click.
 * the callback passed to setInterval updates the count state, by incrementing the count by one
 * or by resetting it if the count is images.length - 1, which is the last image, so we go back to the first image
 *
 * IMPORTANT: how does the timer continue where it left off after is's canceled by a button click?
 * when the timer is canceled, the state also updates to the index value of the button
 * In other words, React manages the state for us, so setCount(c=>c+1) looks at the most recent state value and uses that
 * so the interval continues with where it left off
 *
 * @param {{src: string, alt:string, id: string}[]} images - an array with objects as elements, contains the images to render
 * @param {number} time - controls the interval of setInterval callback
 * @returns {element} - uses 2 slot components, ImageSlot and CarouselButtonsSlot to slot
 * in the image components and button components to the specific part of the UI.
 */
const Carousel = ({ images, time = 2000 }) => {
  let length = images.length || 0;
  const [count, setCount] = useState(0);
  const [canceled, setCanceled] = useState(false);
  const [imageRendered, setImagerendered] = useState(false);

  const timerID = useRef(null);
  useEffect(() => {
    timerID.current = setInterval(() => {
      setCount(prevCount => {
        //images.length
        if (prevCount === length - 1) return 0;
        return prevCount + 1;
      });
    }, time);
    return () => clearInterval(timerID);
  }, [canceled, length, time]);
  return (
    <>
      {imageRendered && (
        <TextSlot>
          <Text>
            Carousel UI achieved with React. The image rotates to the next one
            after 2 seconds, or by clicking the button below the image.
          </Text>
        </TextSlot>
      )}
      <ImageSlot>
        {images.map(({ src, id, alt }, index) => (
          <Image
            key={id}
            src={src}
            alt={alt}
            index={index}
            count={count}
            setImagerendered={setImagerendered}
            length={length}
          />
        ))}
      </ImageSlot>
      <CarouselButtonsSlot>
        <CarouselButtons
          length={length}
          count={count}
          setCount={setCount}
          timerID={timerID}
          setCanceled={setCanceled}
        />
      </CarouselButtonsSlot>
    </>
  );
};

export default Carousel;
