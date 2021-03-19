/**
 * cxBind devuelve una función  usarla para añadir diferentes classNames sin
 * necesidad de usar el formato interpolación cada vez, y además permite añadir
 * cierta lógica gracias a booleanos.
 */
const cxBind = (style) => {
  return (classes = []) => {
    let aux = "";
    classes.forEach((cx) => {
      if (typeof cx === "boolean") return;
      aux = aux + `${style[cx]} `;
    });
    return aux;
  };
};

/**
 * Log genera un console log solo si nos encontramos en desarrollo, y además
 * añade estilo al log.
 */
const log = (element) => {
  if (process.env.NODE_ENV !== "development") return;

  const type = typeof element;

  switch (type) {
    case "string":
      console.log(
        `%c${element}`,
        "background-color: green; color: #EEE; padding: 0.5rem; font-size: 1rem;"
      );
      break;
    case "number":
      console.log(
        `%c${element}`,
        "background-color: green; color: #EEE; padding: 0.5rem; font-size: 1rem;"
      );
      break;
    default:
      console.log(element);
  }
};

/**
 * Err genera un console error solo si nos encontramos en desarrollo, y además
 * añade estilo al error.
 */
const err = (element) => {
  if (process.env.NODE_ENV !== "development") return;

  console.error(
    `%c${element}`,
    "background-color: red; color: #EEE; padding: 1rem; font-size: 2rem;"
  );
};

/**
 * Toggle state.
 */
const toggle = () => {
  return (current) => !current;
};

/**
 * Clean state.
 */
const clean = () => {
  return (current) => {
    switch (typeof current) {
      case "string":
        return "";
      default:
        return null;
    }
  };
};

/**
 * Quita tildes y codifica un string.
 */
const encode = (string) => {
  let encodedString = string
    .replace(/[\xC0-\xC5]/g, "A")
    .replace(/[\xC6]/g, "AE")
    .replace(/[\xC7]/g, "C")
    .replace(/[\xC8-\xCB]/g, "E")
    .replace(/[\xCC-\xCF]/g, "I")
    .replace(/[\xD0]/g, "D")
    .replace(/[\xD1]/g, "N")
    .replace(/[\xD2-\xD6\xD8]/g, "O")
    .replace(/[\xD9-\xDC]/g, "U")
    .replace(/[\xDD]/g, "Y")
    .replace(/[\xDE]/g, "P")
    .replace(/[\xE0-\xE5]/g, "a")
    .replace(/[\xE6]/g, "ae")
    .replace(/[\xE7]/g, "c")
    .replace(/[\xE8-\xEB]/g, "e")
    .replace(/[\xEC-\xEF]/g, "i")
    .replace(/[\xF1]/g, "n")
    .replace(/[\xF2-\xF6\xF8]/g, "o")
    .replace(/[\xF9-\xFC]/g, "u")
    .replace(/[\xFE]/g, "p")
    .replace(/[\xFD\xFF]/g, "y");

  return encodeURI(encodedString);
};

/**
 * Devuelve el símbolo según un Currency_id.
 */
const currencySymbol = (Currency_id) => {
  switch (Currency_id) {
    case "ARS":
      return "$";
    case "USD":
      return "U$S";
    default:
      return "$";
  }
};

export { cxBind, log, err, toggle, clean, encode, currencySymbol };
