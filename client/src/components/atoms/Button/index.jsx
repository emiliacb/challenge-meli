import React from "react";
import PropTypes from "prop-types";
import { A as Link } from "hookrouter";

const Button = ({ children, link, action }) => {
  const handleClick = () => {
    if (action) action();
  };

  return (
    <>
      {link ? (
        <Link href={link}>{children}</Link>
      ) : (
        <button onClick={handleClick}>{children}</button>
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
