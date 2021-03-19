import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import * as help from "utils/helpers";
import Layout from "organisms/Layout";
import Image from "atoms/Image";
import Breadcrumb from "atoms/Breadcrumb";
import Text from "atoms/Text";
import Button from "atoms/Button";

import styles from "./styles.module.scss";

const Product = ({ id }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const getItems = useCallback(() => {
    setLoading(true);

    axios
      .get(`${process.env.API_URL}/api/items/${id}`)
      .then((res) => {
        setItem(res.data.item);
        setLoading(false);
      })
      .catch((err) => {
        help.err(err);
      });
  }, [id]);

  useEffect(() => {
    getItems();
  }, [id]);

  const seo = useMemo(() => {
    return {
      title: `${item.title || "Producto"} | Meli Challenge`,
      description: `${item.description || "Descripcion del producto"}`,
    };
  }, [item]);

  return (
    <Layout>
      {loading && <h1>Loading...</h1>}
      {item.categories && (
        <Breadcrumb categories={item.categories} title={item.title} />
      )}
      <article key={item.id} className={styles.product}>
        <Image
          lazy={{
            picture: item.picture,
            thumbnail: item.thumbnail,
          }}
        />
        {item && (
          <>
            <div className={styles.detail}>
              <small>
                {item.condition == "new" ? "Nuevo - " : "Usado - "}
                {item.sold_quantity} Vendidos
              </small>
              <h1>{item.title}</h1>
              {item.price && (
                <h2>
                  <span>{help.currencySymbol(item.price?.currency)}</span>
                  {
                    //No uso Intl.NumberFormat porque quiero darle diferente estilo a cada parte.
                    parseInt(item.price?.amount).toLocaleString("de-DE")
                  }
                  {item.price?.decimals > 0 && (
                    <sup>{item.price?.decimals}</sup>
                  )}
                </h2>
              )}
              <Button>Comprar</Button>
            </div>
            <div className={styles.description}>
              <h2>Descripcion del producto</h2>
              <Text>{item.description}</Text>
            </div>
          </>
        )}
      </article>
    </Layout>
  );
};

export default Product;

Product.propTypes = {
  id: PropTypes.string.isRequired,
};
