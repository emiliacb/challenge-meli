import React from "react";
import { nanoid } from "nanoid";

/**
 * Convierte las '\n' en <p>.
 */

const Text = ({ children }) => {
  if (!children) return null;
  return children.split("\n").map((string) => <p key={nanoid()}>{string}</p>);
};

export default Text;
