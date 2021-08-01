import React from "react";
import ButtonStyled from "../styles/Button";
/**
 * handleClick:
 * updates count state to the index value, cleartimer and updates canceled state to re-run useEffect hook from parent component
 *
 * @param {number} length - total amount of images to be rendered
 * @param {number} count - count state that controls which image is rendered
 * @param {function} setCount - updates count state
 * @param {number} timerID - id of the timer, used to cancel it
 * @param {function} setCanceled - a state update function used to re-run the useEffect, to call the timer again
 * @returns {element} - renders a button
 */
const Button = ({ count, index, setCount, timerID, setCanceled }) => {
  //current
  const handleClick = () => {
    setCount(index);
    clearInterval(timerID.current);
    setCanceled(prevCanceled => !prevCanceled);
  };
  return (
    <ButtonStyled current={count === index ? 1 : 0} onClick={handleClick} />
  );
};

export default Button;
