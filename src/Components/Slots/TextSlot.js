import React from "react";
import Box from "../../styles/Box";
/**
 *
 * @param {element} children - renders text compoent
 * @returns {element} renders text component
 */
const TextSlot = ({ children }) => {
  return <Box>{children}</Box>;
};

export default TextSlot;
