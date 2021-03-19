const express = require("express");
const axios = require("axios");

const items = express.Router();

/**
 * La ruta /api/items?q=query devuelve un json con la autoría de la api,
 * las categorías de la búsqueda, y los resultados de la misma en un array.
 */

items.get("/", async function (req, res) {
  const { q } = req.query;

  try {
    //Pedido a la api.
    const itemsData = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`
    );

    //Destructuring data.
    const { results, filters, available_filters } = itemsData.data;

    //Transformando la estructura del los items con un mapeo.
    const items = results.map(
      ({
        id,
        title,
        price,
        currency_id,
        thumbnail,
        thumbnail_id,
        condition,
        shipping: { free_shipping },
        address,
      }) => {
        return {
          id,
          title,
          price: {
            currency: currency_id,
            amount: Math.floor(price).toString(),
            decimals: ((price % 1) * 100).toFixed(0),
          },
          thumbnail,
          picture: `http://http2.mlstatic.com/D_${thumbnail_id}-L.jpg`,
          condition,
          free_shipping,
          address,
        };
      }
    );

    //Obteniendo categorias a traves de filter o de avaiable filters.
    let itemCategories;

    if (filters.length) {
      itemCategories = filters[0].values[0].path_from_root.map(
        (category) => category.name
      );
    } else {
      let firstCategory = available_filters[0]?.values;

      //Obteniendo la categoría con más resultados.
      firstCategory.sort(function (a, b) {
        if (a.results > b.results) {
          return -1;
        }
        if (a.results < b.results) {
          return 1;
        }
        return 0;
      });

      //Solo el id es necesario.
      firstCategory = firstCategory[0].id;

      //const firstCategory = available_filters[0].values[1].id;

      //Obteniendo el path de categorias.
      itemCategories = await axios.get(
        `https://api.mercadolibre.com/categories/${firstCategory}`
      );
      //Transformando el array a un array de strings.
      itemCategories = itemCategories.data.path_from_root.map(
        (category) => category.name
      );
      //Enviando solo los ultimos 5 elementos si es mayor a 5.
      itemCategories =
        itemCategories.length > 5 ? itemCategories.slice(-5) : itemCategories;
    }

    //Respuesta.
    const data = {
      author: {
        name: "Emilia",
        lastname: "Cabral Benitez",
      },
      categories: itemCategories,
      items,
    };

    res.status(200);
    res.send(data);

    //Catching errors.
  } catch (error) {
    console.error(error);

    res.status(500);
    res.send(error);
  }
});

/**
 * La ruta /api/items/:id devuelve la información de un item específico,
 * a través de su ID.
 */

items.get("/:id", async function (req, res) {
  const itemId = req.params.id;

  try {
    const itemData = await axios.get(
      `https://api.mercadolibre.com/items/${itemId}`
    );
    const itemDescription = await axios.get(
      `https://api.mercadolibre.com/items/${itemId}/description`
    );

    //Destructuring data.
    const {
      id,
      title,
      price,
      currency_id,
      secure_thumbnail,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
      category_id,
    } = itemData.data;

    //Obteniendo la info de la categoría.
    let itemCategory = await axios.get(
      `https://api.mercadolibre.com/categories/${category_id}`
    );

    itemCategory = itemCategory.data.path_from_root.map(
      (category) => category.name
    );

    //Respuesta.
    const data = {
      author: {
        name: "Emilia",
        lastname: "Cabral Benitez",
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: Math.floor(price).toString(),
          decimals: ((price % 1) * 100).toFixed(0),
        },
        thumbnail: secure_thumbnail,
        picture: pictures[0].secure_url,
        condition,
        free_shipping,
        sold_quantity,
        description: itemDescription.data.plain_text,
        categories: itemCategory,
      },
    };

    res.send(data);

    //Catching errors.
  } catch (error) {
    console.error(error);

    res.status(500);
    res.send(error);
  }
});

module.exports = items;
