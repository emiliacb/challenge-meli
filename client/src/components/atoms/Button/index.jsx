import React, { useState } from "react";
import PropTypes from "prop-types";
import { A as Link } from "hookrouter";

import * as help from "utils/helpers.js";

const Button = ({ children, link, action }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(help.toggle());
    if (action) action();
  };

  return (
    <>
      {link ? (
        <Link
          href={link}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={handleClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  link: PropTypes.string,
  action: PropTypes.func,
};
