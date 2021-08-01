import React from "react";
import Button from "./Button";

/**
 *
 * @param {number} length - total amount of images to be rendered
 * @param {number} count - count state that controls which image is rendered
 * @param {function} setCount - updates count state
 * @param {number} timerID - id of the timer, used to cancel it
 * @param {function} setCanceled - a state update function used to re-run the useEffect, to call the timer again
 * @returns {element} renders a collection of button, where the length reflects the total image amount
 */
const CarouselButtons = ({
  length = 0,
  count,
  setCount,
  timerID,
  setCanceled,
}) => {
  const buttons = Array.from({ length }, (_, index) => index);
  return buttons.map((id, index) => (
    <Button
      key={id}
      index={index}
      count={count}
      setCount={setCount}
      timerID={timerID}
      setCanceled={setCanceled}
    />
  ));
};

export default CarouselButtons;
