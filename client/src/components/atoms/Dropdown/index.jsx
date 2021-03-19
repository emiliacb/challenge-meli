import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

import * as help from "../../../utils/helpers.js";

import styles from "./styles.module.scss";

const cx = help.cxBind(styles);

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const insideRef = useRef(null);
  const dropButtonRef = useRef(null);

  const handleOpen = useCallback(() => {
    setOpen(help.toggle());
  }, []);

  const clickOutside = useCallback((event) => {
    //Cierra el menu si donde se hace el click está afuera.
    if (
      //Validación.
      insideRef.current &&
      //Comprueba que el click es afuera del menu.
      !insideRef.current.contains(event.target) &&
      //Comprueba si el click fue sobre el boton.
      //Esto permite que el boton y el menu expandido sean independientes.
      !dropButtonRef.current.contains(event.target)
    ) {
      setOpen(help.toggle());
    }
  }, []);

  useEffect(() => {
    //Comprueba si existe el elemento window añade compatibilidad con SSR.
    if (typeof window === "undefined") return;
    //Evita que se agregue el evento si el dropdown está cerrado.
    if (open === false) return;
    document.addEventListener("mousedown", clickOutside);
    //El useEffect ejecuta esta función al desmontar.
    return () => document.removeEventListener("mousedown", clickOutside);
  }, [open]);

  return (
    <div className={cx(["wrapper"])}>
      <button
        ref={dropButtonRef}
        className={cx(["dropdown", open && "open"])}
        onClick={handleOpen}
        aria-label="Menu"
      >
        <div className={cx(["hamburger"])}>
          <div className={cx(["topBread", open && "open"])} />
          <div className={cx(["patty", open && "open"])} />
          <div className={cx(["bottomBread", open && "open"])} />
        </div>
      </button>
      {open && (
        <div ref={insideRef} className={cx(["dropDownMenu"])}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
