import React from "react";
import defaultImage from "../img/notfound.jpeg";
import Img from "../styles/Img";

/**
 *
 * @param {string} src - location of image
 * @param {string} alt - image description
 * @param {number} index - index value of image - <Image/> is rendered by map()
 * @param {number} count - count state controls which image should be displayed
 * @param {number} length - points at the length of the image array
 * @param {function} setImagerendered - state update function - tells parent component that the last image has been loaded, called in onLoad event handler
 * @returns
 */

const Image = ({
  src = defaultImage,
  alt = "",
  index = 0,
  count,
  length = 0,
  setImagerendered,
  ...rest
}) => {
  let active = index === count ? 1 : 0;
  const handleError = event => {
    if (!event.target.src) {
      event.target.src = defaultImage;
      event.target.alt = "Image failed to load...";
    }
  };
  const handleLoad = () => {
    //component renders are committed to that DOM by ReactDOM before images are loaded
    //that may create weird UI loading in the first load, where everything other than images are loaded first
    //to create better consistency, handleLoad updates the imageRendered state to true
    //AFTER the last image has been loaded
    //that will create a more consistent UI loading
    if (index === 0) {
      //index === length - 1 - renders components that is not <Image/> too late
      //so updated the expression to index === 0
      //or else if length is 50, then it will take too long
      typeof setImagerendered === "function" && setImagerendered(true);
    }
  };

  return (
    <Img
      src={src}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      active={active}
      aria-hidden={active ? false : true}
      {...rest}
    />
  );
};

export default Image;
