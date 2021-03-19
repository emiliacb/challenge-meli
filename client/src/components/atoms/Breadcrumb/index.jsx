import React from "react";
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
