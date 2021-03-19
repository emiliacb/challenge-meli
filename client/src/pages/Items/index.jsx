import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useQueryParams } from "hookrouter";
import axios from "axios";

import * as help from "utils/helpers";
import Layout from "organisms/Layout/index.jsx";
import Card from "molecules/Card";
import Breadcrumb from "atoms/Breadcrumb";

const Items = () => {
  const [{ search }] = useQueryParams();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const getItems = useCallback(() => {
    axios
      .get(`${process.env.API_URL}/api/items?q=${search}`)
      .then((res) => {
        setItems(res.data.items);
        setCategories(res.data.categories);
        setLoading(false);
      })
      .catch((err) => {
        help.err(err);
      });
  }, [search]);

  useEffect(() => {
    setLoading(true);
    getItems();
  }, [search]);

  const seo = useMemo(() => {
    return {
      title: `${decodeURI(search) || "Búsqueda"} | Meli Challenge`,
      description: `Resultados de búsqueda para ${decodeURI(search)}`,
    };
  }, [search]);

  return (
    <Layout seo={seo}>
      <Breadcrumb categories={categories} title={decodeURI(search)} />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        items && items.map((item) => <Card key={item.id} item={item} />)
      )}
    </Layout>
  );
};

export default Items;
