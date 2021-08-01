import React from "react";
import defaultImage from "../img/notfound.jpeg";
import Img from "../styles/Img";

/**
 *
 * @param {string} src - location of image
 * @param {string} alt - image description
 * @param {number} index - index value of image
 * @param {number} count - count state controls which image should be displayed
 * @returns
 */

const Image = ({
  src = defaultImage,
  alt = "",
  index,
  count,
  length,
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
  const handleLoad = event => {
    //component renders are committed to that DOM by ReactDOM before images are loaded
    //that may create weird UI loading in the first load, where everything other than images are loaded first
    //to create better consistency, handleLoad updates the imageRendered state to true
    //AFTER the last image has been loaded
    //that will create a more consistent UI loading
    if (index === length - 1) {
      setImagerendered(true);
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
