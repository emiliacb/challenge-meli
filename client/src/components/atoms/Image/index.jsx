import React, { useState } from "react";
import PropTypes from "prop-types";

import * as help from "utils/helpers";

import styles from "./styles.module.scss";

const cx = help.cxBind(styles);

/**
 * Este componente permite que mostrar una imagen blureada más liviana,
 * para luego mostrar la imagen más grande.
 */
const Image = ({
  lazy: { picture, thumbnail, alt = ""},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    //Si se desea ver el efecto, descomentar el setTimeout.
    //setTimeout(() => {
    setIsLoaded(true);
    //}, 100)
  };

  return (
    <figure
      className={cx(["figure"])}
    >
      <img
        src={thumbnail}
        alt={alt}
        className={cx(["thumbnail", isLoaded && "hide"])}
      />
      <img
        src={picture}
        alt={alt}
        onLoad={handleLoad}
        className={cx(["picture", !isLoaded && "hide"])}
      />
    </figure>
  );
};

export default Image;

Image.propTypes = {
  lazy : PropTypes.object.isRequired,
};
