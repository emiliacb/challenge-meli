import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { nanoid } from "nanoid";

const Breadcrumb = ({ categories, title }) => {
  return (
    <div className={styles.breadcrumb}>
      {categories.length ? (
        categories.map((category) => {
          return <span key={nanoid()}>{category}</span>;
        })
      ) : (
        <h4>{title}</h4>
      )}
    </div>
  );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.string.isRequired,
};
