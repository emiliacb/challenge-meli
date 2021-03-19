import React, { useState, useCallback, useEffect } from "react";
import { navigate, setQueryParams, usePath } from "hookrouter";

import styles from "./styles.module.scss";
import * as help from "utils/helpers";
import Button from "atoms/Button";

import Search from "images/Icon_Search_x2.png";

const cx = help.cxBind(styles);

const SearchBar = () => {
  const [path] = useState(usePath());
  const [query, setQuery] = useState("");

  const handleChange = useCallback(
    (event) => {
      setQuery(event.target.value);
    },
    [query]
  );
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      //Guarda la query limpia en una varible auxiliar.
      const auxQuery = help.encode(query);
      setQuery(help.clean());

      //Si es items, que cambie la query.
      if (path === "/items") {
        setQueryParams({ search: auxQuery });
      }
      //Si es cualquier otro, que redirija a items
      //y agregue la query.
      else {
        navigate("/items", false, { search: auxQuery });
      }
    },
    [query, path]
  );

  useEffect(() => {
    //Si es home, que vacie la query.
    if (path === "/") {
      return () => {
        setQueryParams({});
      };
    }
  }),
    [path];

  return (
    <form className={cx(["searchBar"])} onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Buscar productos</label>
      <input
        id="searchInput"
        className={cx(["input"])}
        placeholder="Nunca dejes de buscar"
        type="search"
        value={query}
        onChange={handleChange}
      />
      <Button>
        <img src={Search} alt="" width="16px" aria-label="buscar" />
      </Button>
    </form>
  );
};

export default SearchBar;
