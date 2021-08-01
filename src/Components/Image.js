import React, { useRef } from "react";
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

const Image = ({ src = defaultImage, alt = "", index, count, ...rest }) => {
  const srcRef = useRef(src);
  let altVal = useRef(alt);
  const handleError = event => {
    if (!event.target.src) {
      srcRef.current = defaultImage;
      altVal.current = "Image failed to load...";
    }
  };
  let active = index === count ? 1 : 0;
  return (
    <Img
      src={srcRef.current}
      alt={altVal.current}
      onError={handleError}
      active={active}
      aria-hidden={active ? false : true}
      {...rest}
    />
  );
};

export default Image;
